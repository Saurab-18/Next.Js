export const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <>
      <h1>This is a product component</h1>
    </>
  );
};
