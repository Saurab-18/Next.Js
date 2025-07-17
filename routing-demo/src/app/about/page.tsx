// You cannot specify metadata in page where its mention as useclient at top
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next Js Tutorial", // This title will be used if child doesn't have title specified
    template: "%s | CodeEvolution", // Used to add prefix or suffix to child page title
    absolute: "", // Overides the parents title
  },
  description: "This is about page",
};

export default function About() {
  return (
    <>
      <h1>This is About Page</h1>
    </>
  );
}
