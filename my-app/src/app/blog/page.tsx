// Static nested routes
import {Metadata} from "next";
export const metadata: Metadata = {
  // title: "Blog"
  title:{
    absolute:"Just Blog" // Free from paren
  }
}
// localhost:3000/blog
export default function Blog() {
  return <h1>My Blog!</h1>;
}
