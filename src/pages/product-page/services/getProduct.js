import axiosInstance from "../../../services/axiosInstance";

export const getProduct = async (bodyFormData) => {
  return axiosInstance.post("",bodyFormData, {params: {
      route: "appGetProductDetails"
    }
  });
};
