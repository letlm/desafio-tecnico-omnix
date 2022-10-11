import Header from "../../components/Header";
import Home from "../../components/Home";

function Dashboard() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center">
        <Home />
      </main>
    </>
  );
}
export default Dashboard;
