import React from "react";
function ProfileCart() {
  return (
    <div className="profile-cart-container">
      <div className="profile-cart-header">
        <h2>Your Cart</h2>
        <div className="profile-cart-checkout">Checkout (3 Items)</div>
      </div>
      <div className="profile-cart-item-container">
        <div className="profile-cart-item">
          <div className="profile-cart-item-picture-container">
            <img src="https://media.istockphoto.com/photos/cheering-crowd-of-unrecognized-people-at-a-rock-music-concert-concert-picture-id1189205501?k=20&m=1189205501&s=612x612&w=0&h=fexl_Cmu6AdLatIasGg_XYTkLSeWHCtvhMw1nK5_uDc=" />
          </div>
          <div className="profile-cart-item-title">Generic Concert</div>
          <div className="profile-cart-item-address">Chicago, IL</div>
          <div className="profile-cart-item-price">$29.95</div>
          <div className="profile-cart-item-seat">
            Seat: <span>D9</span>
          </div>
          <div className="profile-cart-item-available">60 Seats Available</div>
          <div className="profile-cart-item-delete">Remove</div>
        </div>
        <div className="profile-cart-item">
          <div className="profile-cart-item-picture-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbraSe2Z1jmuTdU0lj8i8nAFqiaz7BBzPMxg&usqp=CAU" />
          </div>
          <div className="profile-cart-item-title">
            Cathal's Big Birthday Extravaganza-Palooza
          </div>
          <div className="profile-cart-item-address">Dublin, Ireland</div>
          <div className="profile-cart-item-price">$399.99</div>
          <div className="profile-cart-item-seat">
            Seat: <span>F3</span>
          </div>
          <div className="profile-cart-item-available">3 Seats Available</div>
          <div className="profile-cart-item-delete">Remove</div>
        </div>
        <div className="profile-cart-item">
          <div className="profile-cart-item-picture-container">
            <img src="https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_NYG_wbg.png" />
          </div>
          <div className="profile-cart-item-title">The Big Game</div>
          <div className="profile-cart-item-address">New York, NY</div>
          <div className="profile-cart-item-price">$150.00</div>
          <div className="profile-cart-item-seat">
            Seat: <span>A10</span>
          </div>
          <div className="profile-cart-item-available">10 Seats Available</div>
          <div className="profile-cart-item-delete">Remove</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCart;
