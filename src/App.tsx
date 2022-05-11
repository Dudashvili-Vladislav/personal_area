import React, { useEffect } from "react";
import { AppRouter } from "./Routes/Router";
import { useDispatch } from "react-redux";
import { fetchAuth } from "./redux/action-creators/user";

export const App = () => {
  const dispatch = useDispatch();

  const initApp = () => {
    const token = localStorage.getItem("token");
    if (token) dispatch(fetchAuth(true));
  };
  useEffect(() => initApp(), []);

  return <AppRouter />;
};
