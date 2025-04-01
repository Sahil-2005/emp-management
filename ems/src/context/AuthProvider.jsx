import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [userData, setuserData] = useState(null);

    // useEffect(() => {
    //     setLocalStorage();
    //     const { employees, admin } = getLocalStorage() || { employees: [], admin: [] };
    //     setuserData({ employees, admin });
    // }, []);


    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        if (storedUserData) {
          setuserData(storedUserData);
        } else {
          setLocalStorage();
          const { employees, admin } = getLocalStorage() || { employees: [], admin: [] };
          setuserData({ employees, admin });
        }
      }, []);
      

    if (!userData) return <div>Loading...</div>; // Prevent rendering null context

    return (
        <AuthContext.Provider value={{userData, setuserData}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
