import React from 'react';
import UserForm from './UserForm';

// const App = () => {
//   return (
//     <div>
//       <h1>Welcome to My App</h1>
//       <CreateUser />
//     </div>
//   );
// };

function CreateUser() {
  const handleUserSubmit = (userData) => {
    console.log('User created:', userData);
    // To  add more actions here, like updating the UI or navigating to another page
  };

  return (
    <div>
      <h2>Create User</h2>
      <UserForm onSubmit={handleUserSubmit} />
    </div>
  );
}

export default CreateUser;
