import React from "react";
import Pagination from "./Pagination";
import { useEffect } from "react";

//reusing style from cart component, don't think we need to change look
function ProfilePurchaseHistory({ orders }) {
  return (
    <div className="profile-purchase-history-container">
      <div className="profile-cart-container">
        <div className="profile-purchase-header">
          <h2>Your Purchase History</h2>
        </div>
        <div className="profile-cart-item-container">
          {orders.orders?.length > 0 ? (
            orders.orders?.map((item) => {
              return (
                <div className="profile-cart-item" key={item.id}>
                  <div className="profile-cart-item-picture-container">
                    <img src={item.events[0].img} />
                  </div>
                  <div className="profile-cart-item-title">
                    {item.events[0].name}
                  </div>
                  <div className="profile-cart-item-address">
                    {item.events[0].location}
                  </div>
                  <div className="profile-cart-item-price">$100</div>
                  <div className="profile-cart-item-seat">
                    Seat: <span>{item.seat}</span>
                  </div>
                  <div className="profile-cart-item-seat">
                    {" "}
                    {`Purchase Date: ${item.updatedAt.slice(
                      5,
                      7
                    )}/${item.updatedAt.slice(8, 10)}/${item.updatedAt.slice(
                      0,
                      4
                    )}`}
                  </div>
                </div>
              );
            })
          ) : (
            <div>No previous orders</div>
          )}
        </div>
      </div>
      <Pagination />
    </div>
  );
}

export default ProfilePurchaseHistory;
