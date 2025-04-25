import "./App.css";
import {BrowserRouter,Routes,Route,useNavigate,useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import MainContext from "./context/main";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import ErrorComponent from "./components/ErrorComponent";
import QuranChaptersPage from "./components/QuranChapterPage";
import HolyQuran from "./components/HolyQuran";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ProfilePage from "./components/ProfilePage";
import { setUserDetail, deleteUserDetail } from "./store/slice/UserDetailSlice";
import { useDispatch, useSelector } from "react-redux";
import RamadanDuas from "./components/Ramadan";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userDetail);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fetch user data based on token
  const loadDataTokenToUserDetail = async (token) => {
    try {
      const response = await fetch(`${SERVER_URL}/api/user/tokentodata`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const jsonData = await response.json();
      if (jsonData.success) {
        dispatch(setUserDetail({ ...jsonData.result, token })); // Store token in Redux
        setIsAuthenticated(true);
        return true;
      } else {
        dispatch(deleteUserDetail()); // Clear Redux state on failure
        return false;
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      dispatch(deleteUserDetail());
      return false;
    }
  };

  useEffect(() => {
    const verifyAuthentication = async () => {
      const token = localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");

      if (token) {
        const success = await loadDataTokenToUserDetail(token);
        setIsAuthenticated(success);
        if (!success) {
          toast.error("Unauthorized Access");
          navigate("/login"); // Redirect to login instead of home
        }
      } else {
        toast.error("Please log in to access this page");
        navigate("/login");
        setIsAuthenticated(false);
        dispatch(deleteUserDetail()); // Clear Redux state if no token
      }

      setLoading(false);
    };

    verifyAuthentication();
  }, [location.pathname, navigate, dispatch]); // Removed userDetail.email to avoid unnecessary re-renders

  if (loading) {
    return <Loading />;
  }

  return isAuthenticated ? children : null; // Render nothing instead of Home to avoid flicker
};

function App() {
  return (
    <MainContext.Provider value={{ SERVER_URL }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/load" element={<Loading />} />
          {/* Protected Routes */}
          <Route
            path="/resources"
            element={
                <Resources />
            }
          />
          <Route
            path="/resources/pdf-chapters"
            element={
              <ProtectedRoute>
                <QuranChaptersPage />
                </ProtectedRoute>
            }
          />
          <Route
            path="/resources/holyquran"
            element={
                <HolyQuran />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/duas"
            element={
                <RamadanDuas />
            }
          />
          {/* Error Route */}
          <Route
            path="*"
            element={
              <ErrorComponent
                message="The page you're looking for doesn't exist or has been moved."
                onRetry={() => window.location.reload()}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainContext.Provider>
  ); 
}

export default App;
