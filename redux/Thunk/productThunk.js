import { emptyProductData, updateLoading } from "../Slices/productSlice";
import { useSelector } from "react-redux";
import useHttpForm from "../../hooks/useHttpForm";
const productData = useSelector(state=>state.product)

const { sendRequest, isLoading } = useHttpForm();

export const addProduct = ({ navigation}) => {
  return (dispatch) => {
    dispatch(updateLoading());

    sendRequest(
      {
        url: ``,
        method:'POST',
        body:productData
      },
      () => {
        dispatch(emptyProductData());
        navigation.navigate("Products1");
        dispatch(updateLoading());
      },
      true
    );
  };
};
