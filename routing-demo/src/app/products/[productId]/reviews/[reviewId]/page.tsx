import { notFound } from "next/navigation";

export default async function Review({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const reviewId = (await params).reviewId;
  const productId = (await params).productId;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        Its review about {productId} {reviewId}
      </h1>
    </>
  );
}
