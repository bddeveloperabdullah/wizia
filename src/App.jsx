import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Button from "./similar/Button";
import SectionP from "./similar/SectionP";
import SectionTitle from "./similar/SectionTitle";

function App() {
  return (
    <>
      <main className="bg-primary">
        <Header />
        <Home />
        <Footer />
      </main>
    </>
  );
}

export default App;
