export function ErrorMessage({ msg }: { msg: string }) {
  return (
    <>
      // icon here
      <p>Something went wrong</p>
      <p>{msg}</p>
    </>
  );
}
