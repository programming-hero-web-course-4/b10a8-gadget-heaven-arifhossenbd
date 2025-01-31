import { useTransition } from "react";
import useLocalStorage from "../utilities/useLocalStorage";
import { toast } from "react-toastify";
import ReuseDashboardCard from "../utilities/ReuseDashboardCard";

export default function Cart({ carts }) {
  const { deleteToStoredItem } = useLocalStorage("cart");
  const handleDeleteToCart = (id) => {
    deleteToStoredItem(id);
    return toast.success(`${carts?.title} is deleted from your cart`);
  };
  const transition = useTransition();
  return (
    <div className={transition}>
      <ReuseDashboardCard allData={carts} onDelete={handleDeleteToCart} />
    </div>
  )
}
