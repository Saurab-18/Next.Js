import { ReactNode } from "react";

// function getRandomNumber(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default function ProductDetailsLayout({
  children,
}: {
  children: ReactNode;
}) {
  // const random = getRandomNumber(2);
  // if (random === 1) {
  //   throw new Error("Error loading product");
  // }
  return (
    <>
      {children}
      <h1>Featured Products</h1>
    </>
  );
}
