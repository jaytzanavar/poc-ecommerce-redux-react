import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-293e7-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      const data = await response.json();
      console.log("data", data);
      if (!response.ok) {
        throw new Error("Could not fectch data");
      }

      return data;
    };

    try {
      const cardData = await fetchData();
      dispatch(cartActions.replaceCard(cardData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Send cart data failed",
          msg: "Data fail!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    console.log("dispatch", dispatch);
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        msg: "",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-293e7-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Send cart data failed",
            msg: "Data fail!",
          })
        );
        throw new Error("Send cart data had error. Fail");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          msg: "Send cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Send cart data failed",
          msg: "Data fail!",
        })
      );
    }
  };
};
