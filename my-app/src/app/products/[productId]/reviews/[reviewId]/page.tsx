// localhost:3000/products/{productId}/reviews/{reviewId}
// Nested Dynamic Route
export default async function ProductReviews({ params,
 }: { 
   params: Promise<{productId: string; reviewId: string}> }) {
    const {productId, reviewId} = await params
   return <h1>Review {reviewId} for Product {productId}</h1>; 
}
