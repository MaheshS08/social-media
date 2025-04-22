"use client";

import { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

function Login() {
	const [isLogin, setIsLogin] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const navigate = useNavigate();
	const { user, login, register } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("hhhhhhhh");
		if (isLogin) {
			const success = login(username, password);
			if (success) {
				navigate("/home");
			}
		} else register(name, username, email, password);
	};

	const handlegooglelogin = () => {
		window.location.href = "http://localhost:8080/oauth2/authorization/google";
	};

	return (
		<div className="auth-container">
			<div className="auth-card">
				<div className="auth-header">
					<h1 className="auth-logo">SocialApp</h1>
					<p className="auth-subtitle">
						{isLogin
							? "Log in to connect with friends and the world around you."
							: "Sign up to see photos and videos from your friends."}
					</p>
				</div>

				<form className="auth-form" onSubmit={handleSubmit}>
					{!isLogin && (
						<>
							<div className="form-group">
								<input
									type="text"
									placeholder="Full Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
						</>
					)}

					<div className="form-group">
						<input
							type="text"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</div>

					<div className="form-group">
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					<button type="submit" className="auth-button">
						{isLogin ? "Log In" : "Sign Up"}
					</button>
				</form>

				<div className="auth-separator">
					<span>OR</span>
				</div>

				<button className="social-auth-button" onClick={handlegooglelogin}>
					Continue with Google
				</button>

				<div className="auth-switch">
					{isLogin ? (
						<p>
							Don't have an account?{" "}
							<button onClick={() => setIsLogin(false)}>Sign up</button>
						</p>
					) : (
						<p>
							Have an account?{" "}
							<button onClick={() => setIsLogin(true)}>Log in</button>
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default Login;
