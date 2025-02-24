import { useEffect, useState } from "react";
import { Header } from "../../Header";
import { StepsHeader } from "../StepsHeader";
import { ProductList } from "../ProductList";
import type { ProductType } from "../@types/types";
import { fetchProducts } from "../../../api";
import { OrdersLocation } from "../OrdersLocation";

export function ListOrders() {
  const [products, setProducts] = useState<ProductType[]>([])
  console.log(products)

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div>
      <Header />
      <StepsHeader />
      <ProductList products={products} />
      <OrdersLocation />
    </div>
  )
}