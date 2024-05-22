import { Grid, Heading, Icon } from "@chakra-ui/react";
import { useEffect } from "react";
import DashboardCard from "../components/DashboardCard";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listOrders } from "../actions/orderActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";

const DashboardCardScreen = () => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listOrders());
  }, [dispatch]);

  const previous = new Date();
  previous.setDate(previous.getDate() - 2);

  // Calculate the start of today (00:00:00 hours)
  const startOfToday = new Date();
  startOfToday.setHours(3, 0, 0, 0);

  console.log(startOfToday);

  const yesterday = new Date();
  yesterday.setDate(startOfToday.getDate() - 1);
  yesterday.setHours(3, 0, 0, 0);

  // Filter orders for today
  const todayOrders = orders.filter((order) => {
    // Convert the UTC string to a Date object
    const orderDate = new Date(order.createdAt);

    // Convert the orderDate to local timezone
    const orderDateLocal = new Date(
      orderDate.getTime() - orderDate.getTimezoneOffset()
    );

    return orderDateLocal >= startOfToday;
  });

  console.log("Orders from today:", todayOrders);

  // Calculate the end of yesterday (just before midnight)
  const endOfYesterday = startOfToday;

  // Filter orders for yesterday
  const yesterdayOrders = orders.filter((order) => {
    const orderDate = new Date(order.createdAt);
    return orderDate >= yesterday && orderDate <= endOfYesterday; // Include orders until end of yesterday
  });

  const yesterdayOrdersValue = yesterdayOrders.reduce(
    (acc, order) => acc + order.totalPrice,
    0
  );

  const todayOrdersValue = todayOrders.reduce(
    (acc, order) => acc + order.totalPrice,
    0
  );

  const todayOrdersCount = todayOrders.length;
  const yesterdayOrdersCount = yesterdayOrders.length;

  let ordersCount;
  if (todayOrdersCount > yesterdayOrdersCount) {
    ordersCount = "increase";
  } else {
    ordersCount = "decrease";
  }

  let ordersValue;

  if (todayOrdersValue > yesterdayOrdersValue) {
    ordersValue = "increase";
  } else {
    ordersValue = "decrease";
  }

  const totalNumberOrders = orders.length;
  const totalOrdersValue = orders.reduce(
    (acc, order) => acc + order.totalPrice,
    0
  );

  const percentageValue = Math.abs(
    ((todayOrdersValue - yesterdayOrdersValue) / totalOrdersValue) * 100
  ).toFixed(2);

  const percentageCount = Math.abs(
    ((todayOrdersCount - yesterdayOrdersCount) / totalNumberOrders) * 100
  ).toFixed(2);

  const dashBoardData = [
    {
      title: "Orders",
      value: totalNumberOrders,
      change: ordersCount,
      percentageChange: percentageCount,
      icon: <BsGraphUpArrow />
    },
    {
      title: "Revenue",
      value: `Ksh ${totalOrdersValue.toLocaleString()}`,
      change: ordersValue,
      percentageChange: percentageValue,
      icon: <FaMoneyCheckAlt />
    }

    // You can add more dashboard items here
  ];

  return (
    <>
      <Heading as="h2" mb="8" fontSize="xl">
        Executive Dashboard
      </Heading>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <Grid
          templateColumns="1fr 1fr"
          gap="100"
          marginX="300"
          marginBottom="5"
        >
          {dashBoardData.map((data, index) => (
            <DashboardCard
              key={index}
              title={data.title}
              value={data.value}
              change={data.change}
              percentageChange={data.percentageChange}
              icon={data.icon}
            />
          ))}
        </Grid>
      )}

      <Grid templateColumns="1fr" marginX="100" marginBottom="5">
        {dashBoardData.map((data, index) => (
          <DashboardCard
            key={index}
            title={data.title}
            value={data.value}
            change={data.change}
            percentageChange={data.percentageChange}
            icon={data.icon}
          />
        ))}
      </Grid>
    </>
  );
};

export default DashboardCardScreen;
