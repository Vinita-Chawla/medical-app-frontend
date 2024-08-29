import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateComponent from "./components/PrivateComponent";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import GoogleSuccess from "./components/GoogleSuccess";
import FacebookSuccess from "./components/FacebookSuccess";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import MultiImageSlider from "./components/ImageSlider";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import SingleFeatured from "./components/SingleFeatured";
import SingleRecent from "./components/SingleRecent";
import Wishlist from "./pages/Wishlist";

const App = () => {
 
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
     <Route element={<PrivateComponent/>}>
     <Route path="/" element={<MainPage/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/cartItems" element={<Cart/>}/>
     <Route path="/wishlistItems" element={<Wishlist/>}/>
     <Route path="/singleFeatured/:id" element={<SingleFeatured/>}/>
     <Route path="/singleRecent/:id" element={<SingleRecent/>}/>
      </Route>

      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<h1>logout Component</h1>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/reset-password/:id/:token" element={<ResetPassword/>}/>
      <Route path="/google-success" element={<GoogleSuccess/>}/>
      <Route path="/facebook-success" element={<FacebookSuccess />} />

      <Route path="/success" element={<Success/>} />
      <Route path="/cancel" element={<Cancel/>} />
     </Routes>
     
    <ToastContainer />

    <MultiImageSlider/>
 <Footer/>

    </BrowserRouter>


  );
};

export default App;
