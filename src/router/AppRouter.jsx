import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { useAuthStore } from "../hooks/useAuthStore";
import App from "../pages/App";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();
  // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }

  return (
    <Routes>
      {/*
                ( status === 'not-authenticated')  
                    ? (
                        <>
                            <Route path="/auth/*" element={ <LoginPage /> } />
                            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
                        </>
                    )
                    : (
                        <>
                            <Route path="/" element={ <App /> } />
                            <Route path="/*" element={ <Navigate to="/" /> } />
                        </>
                    )
                    */}
      <Route path="*" element={<App />} />
    </Routes>
  );
};
