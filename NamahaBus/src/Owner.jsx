import { Navigate } from "react-router-dom";

export default function Owner({ children }) {
  const role = localStorage.getItem("role");

  // console.log("Email:", email);

  // if (email !== "manoharsoftwaredeveloper@gmail.com") {
  if(role !== "admin"){
    return <Navigate to="/" replace />;
    // localStorage.clear();
  }

  return children;
}