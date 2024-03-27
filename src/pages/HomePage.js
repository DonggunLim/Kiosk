import OrderButton from "../components/OrderButton/OrderButton";

export default function HomePage({ $target, router }) {
  const orderButton = new OrderButton({
    $target,
    onClick: () => router.navigate("/order"),
  });
}
