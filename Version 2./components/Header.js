import NavigationBar from "./structures/NavigationBar";

export default function Header() {
  return (
    <header>
      <div className="items-start mx-auto w-full max-w-3xl space-y-7">
        <NavigationBar />
      </div>
    </header>
  );
}
