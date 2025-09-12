// Server Component
export default function ContactPage() {
  console.log("Contact server component");
//   return <h1>Contact page</h1>;
 return <h1>Contact page {new Date().toLocaleTimeString()}</h1>;
}