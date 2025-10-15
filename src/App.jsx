import "./css/App.css";
import SpotCard from "./components/SpotCard";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <SpotCard
        spot={{
          name: "Mohsin Burger",
          spot_location: "Gubrah",
          imageUrl: "/assets/SpotImages/purple-illusion.jpg",
        }}
      />
      <SpotCard
        spot={{
          name: "Camilia",
          spot_location: "Ruwi",
          imageUrl: "/assets/SpotImages/bateman-8pool.jpg",
        }}
      />
  </>
  );
}

export default App;
