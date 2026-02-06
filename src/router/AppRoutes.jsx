import { Route,Routes } from "react-router-dom"
import AppLayout from "../layout/AppLayout.jsx"
import ProductPage from "../pages/product-page/index.jsx"
import Cart from "../pages/cart/index.jsx"
import NotFound from "../pages/not-found/index.jsx"
import { ROUTES } from "../constants/routes.js"
const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path={ROUTES.HOME} element={<ProductPage/>} />
                 <Route path={ROUTES.CART} element={<Cart/>} />
            </Route>
         <Route path="*" element={<NotFound/>} />
        </Routes>

    )
}

export default AppRoutes;