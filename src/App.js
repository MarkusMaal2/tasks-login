import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from "./store/auth-context";
import Tasks from "./components/Tasks/Tasks";

// sample data, just for testing
const DUMMY_TASKS = [
    {
        id: 'e1',
        date: new Date(2023, 0, 10),
        title: "Study React.js",
        priority: 3
    },
    {
        id: 'e2',
        date: new Date(2024, 6, 23),
        title: "Study Javascript",
        priority: 3
    }
]

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPriority, setCurrentPriority] = useState(0)
  const [tasks, setTasks] = useState(DUMMY_TASKS)

  useEffect(() => {
      const storedUserLoginState = localStorage.getItem("isLoggedIn")
      if (storedUserLoginState === "1") {
          setIsLoggedIn(true)
      }
  }, [])

  const loginHandler = (email, password) => {
      localStorage.setItem("isLoggedIn", "1")
      setIsLoggedIn(true)
  };

  const logoutHandler = () => {
      localStorage.removeItem("isLoggedIn")
      setIsLoggedIn(false)
  };

  const changePriorityHandler = (priority) => {
        setCurrentPriority((previousPriority) => {
            return priority
        })
  }
  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout:logoutHandler} }>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
          <Tasks onChangePriority={changePriorityHandler} tasks={tasks} currentPriority={currentPriority}></Tasks>
      </main>
    </AuthContext.Provider>
  );
}

export default App;
