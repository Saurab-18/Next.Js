export const Review = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return (
    <>
      <h1>This is a review component</h1>
    </>
  );
};
