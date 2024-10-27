// authContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import AuthService from "./services/AuthService";
import { useDispatch, useSelector } from "react-redux";
import {
  loginSuccess,
  saveToken,
  updateIsAuthenticatedStatus,
} from "./stores/userSlice";
import { useNavigate } from "react-router-dom";
import UserService from "./services/UserService";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

interface LoginRequest {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: any) => state.user);

  const login = async (username: string, password: string) => {
    try {
      const obj: LoginRequest = { email: username, password: password };
      await AuthService.login(obj).then((response: any) => {
        console.log(response);

        if (response?.token && response?.status === 200) {
          dispatch(saveToken(response?.token));
          dispatch(updateIsAuthenticatedStatus(true));
          UserService.getUserDetails().then((response: any) => {
            if (response?.status === 200) {
              dispatch(loginSuccess(response?.data));
            } else {
            }
          });
          navigate("/");
        } else {
          dispatch(updateIsAuthenticatedStatus(false));
        }
      });
    } catch (error) {
      dispatch(updateIsAuthenticatedStatus(false));
      console.error(error);
    }
  };

  const logout = () => dispatch(updateIsAuthenticatedStatus(false));

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
