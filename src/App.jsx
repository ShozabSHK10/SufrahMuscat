import "./css/App.css";
import SpotCard from "./components/SpotCard";

function App() {
  return (
    <>
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
