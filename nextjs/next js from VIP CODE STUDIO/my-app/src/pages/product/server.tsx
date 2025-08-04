import { ProductType } from "@/types/product.type";
import ProductView from "@/views/Product";

export default function ProductPage({ products }: { products: ProductType[] }) {
  return (
    <section>
      <ProductView products={products} />
    </section>
  );
}

//* Dipanggil setiap melakukan request atau setiap halaman nya dibuka
export async function getServerSideProps() {
  //* fetch data
  const res = await fetch("http:localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}
