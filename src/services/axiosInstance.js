import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://psm1.knowband.com/mobileapp/17/index.php",
  params: {
    fc: "module",
    module: "kbmobileapp",
    controller: "ApiCall",
    version: "2.0",
    iso_code: "en"
  }
});

export default axiosInstance;
