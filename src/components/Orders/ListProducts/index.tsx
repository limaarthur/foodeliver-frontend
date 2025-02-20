import { Header } from "../../Header";
import { StepsHeader } from "../StepsHeader";

export function ListOrders() {
  return (
    <div>
      <Header />
      <div className="productsListContainer">
        <StepsHeader />
      </div>
    </div>
  )
}