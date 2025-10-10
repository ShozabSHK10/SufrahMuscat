import "../css/SpotCard.css"

function SpotCard({spot}) {

  function addToFavs() {
    alert("added to favorite spots")
  }

  return (
  <div className="spot-card">
    <div className="spot-image">
      <img src={spot.imageUrl} alt={spot.name} />
      <div className="image-overlay">
        <button className="fav-btn" onClick={addToFavs}>
          ❤️
        </button>
      </div>
    </div>
    <div className="spot-info">
      <h3>{spot.name}</h3>
      <p>{spot.spot_location}</p>
    </div>
  </div>
  );
}

export default SpotCard
