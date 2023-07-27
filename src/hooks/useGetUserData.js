import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useGetUserData() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axios.get("users");
      setUserData(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { userData };
}
