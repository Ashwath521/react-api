import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function useSignIn(userData, userEmail) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const exists = userData.some((data) => data?.userEmail === userEmail);
    const tokenData = userData.filter((data) => data?.userEmail === userEmail);
    if (exists) {
      const token = tokenData?.map((data) => {
        return data?.jwt;
      });
      localStorage.setItem("token", JSON.stringify(token));
      toast.success("User Sign in successfully");
      navigate("/dashboard");
    } else {
      toast.error("Username or Email is invalid please check");
    }
  };

  return { handleSubmit };
}
