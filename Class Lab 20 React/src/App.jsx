import { useState } from "react";
import Header from "./components/UI/Header";
import Main from "./components/UI/Main";
import Footer from "./components/UI/Footer";
import LoginBage from "./components/auth/Login";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <LoginBage message="Login Successful" />
    </>
  );
}

export default App;
