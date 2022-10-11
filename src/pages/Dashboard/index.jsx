import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Home from "../../components/Home";

function Dashboard() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center">
        <Home />
      </main>
      <Footer />
    </>
  );
}
export default Dashboard;
