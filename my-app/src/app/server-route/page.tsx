// Importing server code in server component
import ImageSlider from "../components/ImageSlider";

import { serverSideFunction } from "../utils/page";

export default function ServerRoutePage() {
  const result = serverSideFunction();
//   return <h1>Server Route {result}</h1>;
 return (
    <>
      <h1>Server Route {result}</h1>
      <ImageSlider />
    </>
  );
}