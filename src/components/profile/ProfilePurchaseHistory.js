import React from "react";

//reusing style from cart component, don't think we need to change look
function ProfilePurchaseHistory() {
  return (
    <div className="profile-purchase-history-container">
      <div className="profile-cart-container">
        <div className="profile-cart-header">
          <h2>Your Purchase History</h2>
        </div>
        <div className="profile-cart-item-container">
          <div className="profile-cart-item">
            <div className="profile-cart-item-picture-container">
              <img src="https://s1.ticketm.net/dam/a/84e/4d1720db-9677-413c-b844-2cd22f1f484e_1313551_TABLET_LANDSCAPE_LARGE_16_9.jpg" />
            </div>
            <div className="profile-cart-item-title">
              New Abnormal: The Strokes
            </div>
            <div className="profile-cart-item-address">Portland, OR</div>
            <div className="profile-cart-item-price">$79.00</div>
            <div className="profile-cart-item-seat">
              Seat: <span>H7</span>
            </div>
            <div className="profile-cart-item-seat">Purchase Date: 9/15/22</div>
          </div>
          <div className="profile-cart-item">
            <div className="profile-cart-item-picture-container">
              <img src="https://i.guim.co.uk/img/media/da207ed976e1b316bab8a8ae547b6dbdc992911f/504_0_4674_2805/master/4674.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0f625bcdff3a9aede290d4cfa832dcfa" />
            </div>
            <div className="profile-cart-item-title">
              Arcade-Fire -- Amsterdam, Netherlands
            </div>
            <div className="profile-cart-item-address">
              Amsterdam, Netherlands
            </div>
            <div className="profile-cart-item-price">$129.95</div>
            <div className="profile-cart-item-seat">
              Seat: <span>E5</span>
            </div>
            <div className="profile-cart-item-seat">Purchase Date: 6/08/22</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePurchaseHistory;
