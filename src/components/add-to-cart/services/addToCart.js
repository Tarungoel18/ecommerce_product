import axiosInstance from "../../../services/axiosInstance";

export const addToCart = async (bodyFormData) => {
  return axiosInstance.post("",bodyFormData, {params: {
      route: "appAddToCart"
    }
  });
};
