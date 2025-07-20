import { redirect } from "next/navigation";

// function getRandomNumber(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default async function Review({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  // const random = getRandomNumber(2);
  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }

  const reviewId = (await params).reviewId;
  const productId = (await params).productId;
  if (parseInt(reviewId) > 1000) {
    redirect("/products");
  }
  return (
    <>
      <h1>
        Its review about {productId} {reviewId}
      </h1>
    </>
  );
}
