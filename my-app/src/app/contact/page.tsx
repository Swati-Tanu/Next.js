import { cookies } from "next/headers";

// Server Component
export default async function ContactPage() {
  console.log("Contact server component");
  // Dynamic Rendering
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
//   return <h1>Contact page</h1>;
 return <h1>Contact page {new Date().toLocaleTimeString()}</h1>;
}