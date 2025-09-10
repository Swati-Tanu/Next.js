// localhost:3000/products/{productId}: localhost:3000/products/1 or localhost:3000/products/iphone
// use params to display dynamic content
export default async function ProductDetails({ params }) {
  const { productId } = await params;
  return <h1>Details about the product {productId}</h1>;
}
