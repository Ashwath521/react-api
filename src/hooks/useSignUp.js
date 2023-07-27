import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RandomJWTGen from "../function/RandomJWTGen";

export default function useSignUp(
  firstUserName,
  lastUserName,
  userEmail,
  userPassword
) {
  const navigate = useNavigate();
  const fakeSecretKey = RandomJWTGen();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !firstUserName?.trim() ||
      !lastUserName?.trim() ||
      !userEmail?.trim() ||
      !userPassword?.trim()
    ) {
      toast.error("anyone of the input field is empty");
    } else if (firstUserName.length < 4 || lastUserName.length < 4) {
      toast.error("name should be atleast 4 character");
    } else if (!/^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(userEmail)) {
      toast.error("Please enter a valid email address");
    } else {
      try {
        await axios.post("users", {
          firstName: firstUserName,
          lastName: lastUserName,
          userEmail: userEmail,
          jwt: fakeSecretKey,
          pwd: userPassword,
        });
        toast.success("Sign up successfully!");
        navigate("/");
      } catch (error) {
        toast.error(error.message);
        // Handle the error appropriately. You may show a message to the user or perform other actions.
      }
    }
  };

  return { handleSubmit };
}
