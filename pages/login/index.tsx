"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../src/styles/FoodList.module.css";
import loginStyles from "../../src/styles/Featured.module.css";
import { useRouter } from "next/navigation";
import Navbar from "../../src/Components/Navbar";
import Layout from "../../src/Components/Layout";
import FoodOrderingRouteUtils from "../../src/utils/routeUtils";

interface LoginProps {}

const Login = (props: LoginProps) => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset form fields
    setUsername('');
    setPassword('');
  };
  
  return (
    <body className={styles.body}>
    <Layout>
      <Navbar />
      <div style={{
        display: 'flex',
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}>
      <div className={loginStyles.loginCard}>
      <h2>Login</h2>
      <form style={{width: "100%", display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
        <div className={loginStyles.formGroup}>
          <label htmlFor="username" className={loginStyles.label}>Username</label>
          <input
          className={loginStyles.input}
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div className={loginStyles.formGroup}>
          <label htmlFor="password" className={loginStyles.label}>Password</label>
          <input
          className={loginStyles.input}
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button className={loginStyles.button} type="submit">Login</button>
      </form>
    </div>
    </div>
    </Layout>
    </body>
  );
};

export default Login;
