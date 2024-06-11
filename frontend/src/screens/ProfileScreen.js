import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Spacer,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Icon,
  Box
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoWarning } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { USER_DETAILS_RESET } from "../constants/userConstants";

const ProfileScreen = () => {
  const dispatch = useDispatch(); // We need to dispatch actions
  const navigate = useNavigate(); // We need to use navigate to redirect the user

  const [name, setName] = useState(""); // We need to set the name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;


  useEffect(() => {
    if (!userInfo) {
      navigate("/login"); // If the user is not logged in, we want to redirect them to the login page
    } else {
      if (!user.name) {
        console.log(userInfo._id);
        dispatch(getUserDetails(userInfo._id)); // If the user info is not in the state, we want to dispatch getUserDetails
      
      } else {
        setName(user.name); // If the user info is in the state, we want to set the name and email to the user info
        console.log(user.email);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, user, userInfo, success]); // We want to run this effect whenever the dispatch, navigate, user, userInfo, or success changes

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
      dispatch({ type: USER_DETAILS_RESET });
    }
  };

  return (
    <Box height="100vh" overflow="auto">
      <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} py="5" gap="10">
        <Flex
          w="full"
          // alignItems="center"
          justifyContent="center"
          py="5"
          position="sticky"
          top="0"
        >
          <FormContainer>
            <Heading as="h1" mb="8" fontSize="3xl">
              User Profile
            </Heading>

            {error && <Message type="error">{error}</Message>}
            {message && <Message type="error">{message}</Message>}

            <form onSubmit={submitHandler}>
              <FormControl id="name">
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <Spacer h="3" />

              <FormControl id="email">
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="username@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <Spacer h="3" />

              <FormControl id="password">
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              <Spacer h="3" />

              <FormControl id="confirmPassword">
                <FormLabel htmlFor="confirmPassword">
                  Confirm Password
                </FormLabel>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="************"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="teal"
                mt="4"
                isLoading={loading}
              >
                Update
              </Button>
            </form>
          </FormContainer>
        </Flex>

        {/* Orders */}
        <Flex direction="column">
          
          (
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>DATE</Th>
                  <Th>TOTAL</Th>
                  <Th>PAID</Th>
                  <Th>DELIVERED</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              
            </Table>
          )
        </Flex>
      </Grid>
    </Box>
  );
};

export default ProfileScreen;
