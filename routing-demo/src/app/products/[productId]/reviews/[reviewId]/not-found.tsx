"use client";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathName = usePathname();
  const reviewId = pathName.split("/")[4];

  return (
    <>
      <h1>
        The review with {reviewId} you are trying to search is not found
        oooops!!!
      </h1>
    </>
  );
}
