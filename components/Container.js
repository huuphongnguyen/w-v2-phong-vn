import Footer from "./Footer";
import Header from "./Header";

export default function Container({ children }) {
  return (
    <div className="dark:bg-black bg-white">
      <main className="flex flex-col justify-center space-y-4 py-7 px-4 dark:bg-black bg-white">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}
