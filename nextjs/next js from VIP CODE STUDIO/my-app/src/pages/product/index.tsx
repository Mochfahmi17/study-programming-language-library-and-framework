import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function ProductPage() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const router = useRouter();

  const { data, error, isLoading } = useSWR("/api/product", fetcher);
  console.log(data);
  console.log(error);
  console.log(isLoading);

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((response) => setProducts(response.data));
  // }, []);
  return (
    <section>
      <ProductView products={isLoading ? [] : data.data} />
    </section>
  );
}
