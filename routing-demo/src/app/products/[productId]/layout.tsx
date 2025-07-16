import { ReactNode } from "react";

export default function ProductDetailsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <h1>Featured Products</h1>
    </>
  );
}
