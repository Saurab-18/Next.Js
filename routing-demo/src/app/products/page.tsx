import Link from "next/link";
export default function Products() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Products List</h1>
      <Link href="/products/1">
        <h3>Product 1</h3>
      </Link>
      <h3>Product 2</h3>
      <h3>Product 3</h3>
    </>
  );
}
