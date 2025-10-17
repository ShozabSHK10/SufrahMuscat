import { useState } from "react";
import NavBar from "../components/NavBar";
import SpotCard from "../components/SpotCard";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const spots = [
    {
      id: 1,
      name: "Purple Illusion",
      spot_location: "Void",
      imageUrl: "/assets/SpotImages/purple-illusion.jpg",
    },
    {
      id: 2,
      name: "Christian Bale",
      spot_location: "American Psycho",
      imageUrl: "/assets/SpotImages/bateman-8pool.jpg",
    },
    {
      id: 3,
      name: "FCB",
      spot_location: "Spain",
      imageUrl: "/assets/SpotImages/Barcelona-Emblem.jpg",
    },
    {
      id: 4,
      name: "Joao Cancelo",
      spot_location: "Riyad",
      imageUrl: "/assets/SpotImages/Cancelooo.jpg",
    },
    {
      id: 5,
      name: "Corvette CXR",
      spot_location: "Salalah",
      imageUrl: "/assets/SpotImages/ConceptCXR.png",
    },
    {
      id: 6,
      name: "Xavi Hernandez",
      spot_location: "Barcelona",
      imageUrl: "/assets/SpotImages/xavi.jpg",
    },
    {
      id: 7,
      name: "BMW M3 GTR",
      spot_location: "New york",
      imageUrl: "/assets/SpotImages/NFSMW.jpg",
    },
    {
      id: 8,
      name: "Bahjat Al Afkar",
      spot_location: "Wadi Kabir",
      imageUrl: "/assets/SpotImages/Logo.jpg",
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
