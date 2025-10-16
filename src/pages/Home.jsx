import { useState } from "react";
import NavBar from "../components/NavBar";
import SpotCard from "../components/SpotCard";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const spots = [
    {
      id: 1,
      name: "Mohsin Burger",
      spot_location: "Gubrah",
      imageUrl: "/assets/SpotImages/purple-illusion.jpg",
    },
    {
      id: 2,
      name: "Camilia",
      spot_location: "Ruwi",
      imageUrl: "/assets/SpotImages/bateman-8pool.jpg",
    },
  ];

  const filteredSpots = spots.filter((spot) =>
    spot.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <NavBar onSearch={setSearchQuery} />
      <div className="spots-grid">
        {filteredSpots.map((spot) => (
          <SpotCard spot={spot} key={spot.id} />
        ))}
      </div>
    </>
  );
}

export default App;
