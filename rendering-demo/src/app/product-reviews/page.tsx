import { Suspense } from "react";
import { Product } from "@/components/product";
import { Review } from "@/components/review";

export default function ProductReviews() {
  return (
    <>
      <h1>Product Review Page</h1>
      <Suspense fallback={<p>The Products are loading</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={"The Products are loading"}>
        <Review />
      </Suspense>
    </>
  );
}
