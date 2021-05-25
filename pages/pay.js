import PayFooter from "../components/structures/pay/PayFooter";
import PayHeader from "../components/structures/pay/PayHeader";
import PayNavigationBar from "../components/structures/pay/PayNavigationBar";

export default function Pay() {
  return (
    <div className="p-4">
      <PayHeader />
      <PayNavigationBar />
      <PayFooter />
    </div>
  );
}
