import axiosInstance from "../../../services/axiosInstance";

export const getCartDetails = async (bodyFormData) => {
  return axiosInstance.post("", bodyFormData, {
    params: {
      route: "appGetCartDetails",
    },
  });
};
