import { useEffect, useState } from "react";
import { Header } from "../../Header";
import { StepsHeader } from "../StepsHeader";
import { ProductList } from "../ProductList";
import type { Product } from "../@types/types";
import { fetchProducts } from "../../../api";

export function ListOrders() {
  const [products, setProducts] = useState<Product[]>([])
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
      <ProductList />
    </div>
  )
}