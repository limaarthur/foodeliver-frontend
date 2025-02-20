import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "./components/Home";
import { ListOrders } from "./components/Orders/ListOrders";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<ListOrders />} />
      </Routes>
    </BrowserRouter>
  )
}