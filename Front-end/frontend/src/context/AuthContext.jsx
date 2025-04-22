"use client";
import axios from "axios";
import { createContext, useState, useEffect } from "react";
import Home from "../pages/Home";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Check if user is already logged in
		const storedUser = localStorage.getItem("socialAppUser");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		setLoading(false);
	}, []);

	const login = async (username, password) => {
		console.log("jfjfjfjfjfjfj");
		const formdata = {
			username: username,
			password: password,
		};
		const response = await axios.post(
			"http://localhost:8080/api/v1/auth/login",
			formdata
		);

		if (response.data === "Login Successful") {
			return true;
		}
	};

	const register = async (name, username, email, password) => {
		console.log("hdhfhfhfh");
		// Mock register functionality
		const mockUser = {
			name: name,
			username: username,
			email: email,
			password: password,
		};
		console.log("hello");
		console.log(mockUser);

		const response = await axios.post(
			"http://localhost:8080/api/v1/auth/register",
			mockUser
		);
		console.log(response);
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("socialAppUser");
	};

	return (
		<AuthContext.Provider value={{ user, login, register, logout, loading }}>
			{children}
		</AuthContext.Provider>
	);
}
