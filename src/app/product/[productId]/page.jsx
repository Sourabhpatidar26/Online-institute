// Dynamic metadata

export const generateMetadata = ({ params }) => {
  return {
    title: `${params.productId}`,
  };
};

export default function page({ params }) {
    if(params.productId == 1){
        throw new Error("Somthing went wrong!")
    }
  return <div>Product {params.productId}</div>;
}
