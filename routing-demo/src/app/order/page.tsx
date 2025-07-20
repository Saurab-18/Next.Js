"use client";
import { useRouter } from "next/navigation";
export default function OrderProduct() {
  const router = useRouter();

  const handlePlaceOrder = () => {
    console.log("Your order is Placed");
    router.push("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </>
  );
}
