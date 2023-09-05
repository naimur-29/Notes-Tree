// local components:
import Header from "./Header";

export default function BaseLayout(props: any) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
