// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Users } from './features/users/users'

// function App() {

//   return (
//     <>
//       <Users/>
//     </>
//   )
// }

// export default App

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Users } from './features/users/users';
import { AddUser } from './features/users/addUser';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <Link to="/">All Users</Link>  <Link to="/addUser">Add User</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/addUser" element={<AddUser />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;


