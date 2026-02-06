import "./assets/css/common/flexslider.css";
import "./assets/css/common/header.css";
import "./assets/css/common/owl.carousel.min.css";
import "./assets/css/common/owl.theme.default.min.css";
import "./assets/css/common/ui_kit.css";
import "./assets/css/main.css";
import "./assets/css/mobile.css";
import "./assets/css/mobileSelect.css";
import "./assets/css/style.css";
import AppRoutes from "./router/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
