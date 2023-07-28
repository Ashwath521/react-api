import axios from "axios";
import { toast } from "react-toastify";
export default function useUpdateName() {
  const handleUpdate = async () => {
    try {
      await axios.put("product/1", {
        name: "Apple Ph",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  return { handleUpdate };
}
