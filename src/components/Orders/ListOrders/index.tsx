import { useEffect, useState } from "react";
import { Header } from "../../Header";
import { StepsHeader } from "../StepsHeader";
import { ProductList } from "../ProductList";
import type { OrderLocationdata, ProductType } from "../@types/types";
import { fetchProducts } from "../../../api";
import { OrdersLocation } from "../OrdersLocation";
import { OrderSummary } from "../OrderSummary";
import { Footer } from "../../Footer";
import { checkIsSelected } from "../helpers";

export function ListOrders() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>()

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, []);

  const handleSelectProduct = (product: ProductType) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);
  
    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  return (
    <>
      <div>
        <Header />
        <StepsHeader />
        <ProductList 
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrdersLocation 
          onChangeLocation={location => setOrderLocation(location)} 
        />
        <OrderSummary />
      </div>
      <Footer />
    </>
  )
}