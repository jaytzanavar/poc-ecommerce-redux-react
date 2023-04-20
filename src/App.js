import { useSelector, useDispatch } from "react-redux";
// import { uiActions } from "./store/ui-slice";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/Notification/Notification";
import { useEffect } from "react";
import { sendCartData, fetchCartData } from "./store/cart-actions";
// first time file run
let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cardIsVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  return (
    <>
      {" "}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.msg}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
