import {Routes , BrowserRouter , Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Projects from "./pages/Projects";
import './App.css'
import Header from "./components/Header";
import FooterComp from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";
import OnlyAdmin from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";

function App() {
  const [user , setUser] = useState(false);
  function getUserStatus(user)
  {  
      setUser(user);
      console.log(user);
  }

  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home user={getUserStatus}></Home>}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route element={<PrivateRoute userInfo = {user}></PrivateRoute>}>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Route>
        <Route element={<OnlyAdmin></OnlyAdmin>}>
          <Route path="/create-post" element={<CreatePost/>}></Route>
          <Route path="/update-post/:postId" element={<UpdatePost/>}></Route>
        </Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/post/:postSlug" element={<PostPage/>}></Route>
      </Routes>
      <FooterComp></FooterComp>
    </BrowserRouter>
  )
}

export default App
