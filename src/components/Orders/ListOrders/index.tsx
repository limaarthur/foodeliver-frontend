import { useEffect, useState } from "react";
import { Header } from "../../Header";
import { StepsHeader } from "../StepsHeader";
import { ProductList } from "../ProductList";
import type { OrderLocationdata, ProductType } from "../@types/types";
import { fetchProducts } from "../../../api";
import { OrdersLocation } from "../OrdersLocation";

export function ListOrders() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>()

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
      <OrdersLocation onChangeLocation={location => setOrderLocation(location)} />
    </div>
  )
}