import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import "./App.css";
import ProtectedRoutes from "./utils/protectedroutes";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/recover" element={<ResetPassword />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
