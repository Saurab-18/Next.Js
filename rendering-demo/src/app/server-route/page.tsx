import ImageSlider from "@/components/image-slider";
import { serverSideFunction } from "@/utils/server-utils";
export default function ServerRoutePage() {
  const result = serverSideFunction();
  return (
    <>
      <h1>{result}</h1>;
      <ImageSlider />
    </>
  );
}
