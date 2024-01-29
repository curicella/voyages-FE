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
import Profile from "./pages/Profile/Profile";
import Create from "./pages/Create";
import LikedDiaries from "./pages/Profile/likedDiaries";

function App() {
  const { setUserFunction } = useContext(MyContext);
  const data = localStorage.getItem("user");
  const currentUser = JSON.parse(data);
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
console.log(currentUser);
  return (
    <>
      <MyNavigation />
      <Routes>
        <>{!currentUser && (
          <>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
          </>
        )}
        </>
        <>{currentUser && (
          <>
          <Route path="/" element={<Navigate to="/feed" />} />
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/likedDiaries" element={<LikedDiaries/>}/>
          </>
        )}
        </>
        
        
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;