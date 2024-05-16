import React, { createContext, useState, useContext, useEffect } from "react";
import useHttp2 from "../hooks/useHttp2";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [splashLoading, setSplashLoading] = useState(false);
  const { sendRequest, isLoading } = useHttp2();

  const register = (name, email, password) => {
    sendRequest(
      {
        url: "auth/register",
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: {
          name,
          email,
          password
        },
      },
      (result) => {
        console.log(result);
      },
      true
    );
  };

  const login = (username, password) => {
    sendRequest(
      {
        url: "auth/login",
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: {
          username,
          password,
        },
      },
      (result) => {
        AsyncStorage.setItem("userInfo", JSON.stringify(result.data));
        setUserInfo(result.data);
      },
      true
    );
  };

  const logout = async () => {
    await AsyncStorage.removeItem("userInfo");
    setUserInfo({});
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
