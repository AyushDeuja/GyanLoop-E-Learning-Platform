import NavBar from "../components/NavBar";

const AppLayout = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-gray-800 to-gray-900">
      <NavBar />
      <main></main>
      <footer></footer>
    </div>
  );
};

export default AppLayout;
