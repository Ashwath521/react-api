import axios from "axios";
import { toast } from "react-toastify";
export default function useProductDelete() {
  const handleDelete = async () => {
    try {
      await axios.delete("product/1");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return { handleDelete };
}
