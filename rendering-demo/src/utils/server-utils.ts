import "server-only";
export const serverSideFunction = () => {
  console.log(`use multiple libraries and env variables`);
  return "Server Results";
};
