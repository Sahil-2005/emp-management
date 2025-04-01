import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {

  // localStorage.clear();
  
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const { userData, setuserData } = useContext(AuthContext); // Fixing Auth Context

  useEffect(() => {
    if (!userData) return; // Prevents accessing null data

    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const parsedUserData = JSON.parse(loggedInUser);
      setLoggedInUserData(parsedUserData);
      setUser(parsedUserData.role);
    }
  }, [userData]); // Runs when userData changes

  const handleLogin = (email, password) => {
    if (!userData) return; // Prevent errors if userData isn't ready

    if (email === "admin@example.com" && password === "123") {
      const admin = userData.admin.find((e) => e.email === email && e.password === password);

      if (admin) {
        const userData = { role: "admin", data: admin };
        setUser("admin");
        setLoggedInUserData(userData);
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
      }
    } else if (email.includes("employee")) {
      const employee = userData.employees.find((e) => e.email === email && e.password === password);

      if (employee) {
        const userData = { role: "employee", data: employee };
        setUser("employee");
        setLoggedInUserData(userData);
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard data={loggedInUserData.data} changeUser={setUser} />
      ) : (
        <EmployeeDashboard data={loggedInUserData.data} changeUser={setUser} />
      )}
    </>
  );
};

export default App;
