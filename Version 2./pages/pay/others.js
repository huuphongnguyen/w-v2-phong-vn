import HideButton from "../../components/structures/pay/HideButton";
import PayFooter from "../../components/structures/pay/PayFooter";
import PayHeader from "../../components/structures/pay/PayHeader";
import PayNavigationBar from "../../components/structures/pay/PayNavigationBar";

export default function Others() {
  return (
    <div className="p-4">
      <PayHeader />
      <PayNavigationBar />
      <HideButton />
      <div className="items-start mx-auto w-full max-w-xl mt-7 space-y-6"></div>
      <PayFooter />
    </div>
  );
}
