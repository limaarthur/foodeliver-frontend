import type { ProductType } from "./@types/types";

export function checkIsSelected(selectedProducts: ProductType[], product: ProductType) {
  return selectedProducts.some(item => item.id === product.id);
}