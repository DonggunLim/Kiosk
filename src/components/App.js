import "../styles/reset.css";
import "../styles/global.css";

import OrderButton from "./OrderButton/OrderButton";

export default function App({ $target }) {
  const orderBtn = new OrderButton({
    $target,
    onClick: () => {
      console.log("click");
    },
  });
}
