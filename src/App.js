import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ErrorPage from "./pages/ErrorPage";
import Feed from "./pages/Feed"
import Search from "./pages/Search";
import MyNavigation from "./components/shared/MyNavigation";
import Footer from "./components/shared/Footer";
import { useContext, useEffect } from "react";
import { MyContext } from "./context/myContext";
import axios from "axios";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  const { setUserFunction } = useContext(MyContext);

  useEffect(() => {
    const data = localStorage.getItem("user");
    const currentUser = JSON.parse(data);
    if (currentUser) {
      setUserFunction(currentUser);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${currentUser.token}`;
    }
  }, []);

  return (
    <>
      <MyNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/profile" element={<Profile/>}/>
        {/* <Route path="/myDiaries" element={<Profile/>}/> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;