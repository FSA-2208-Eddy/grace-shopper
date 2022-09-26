import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleEvent } from "../";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleEvent = () => {
  const [qty, setQty] = React.useState(1);
  const [singleEvent, setSingleEvent] = React.useState({});

  const dispatch = useDispatch();
  const { id } = useParams();
  const cart = useSelector((state) => state.cart.cart);

  React.useEffect(() => {
    const singleEvent = async () => {
      const { payload } = await dispatch(getSingleEvent(id));
      setSingleEvent(payload);
    };
    singleEvent();
  }, []);

  const increase = () => {
    setQty(qty + 1);
  };

  const decrease = () => {
    if (qty !== 1) {
      setQty(qty - 1);
    }
  };
  const addToCart = async () => {
    if (singleEvent.tickets - qty >= 0) {
      await axios.put("/api/users/cart", {
        eventId: singleEvent.id,
        qty,
        seat: "good",
      });
      alert("successful");
    } else {
      alert("not enough tickets");
    }
  };

  return (
    <div id="single-event-root-container">
      <div id="single-event-row-1">
        <div className="single-event-date">
          <h2>
            {singleEvent.startTime ? singleEvent.startTime.slice(0, 10) : "TBA"}
          </h2>
        </div>
        <div className="single-event-title">{singleEvent?.name}</div>
      </div>
      <div id="single-event-row-2">
        <div className="single-event-image">
          <img src={singleEvent.img} />
        </div>
        <div className="single-event-details">
          <h1>
            <span className="single-event-bold">Location:&nbsp;</span>
            {singleEvent?.location}
          </h1>
          <p>
            <span className="single-event-bold">Tickets Remaining:&nbsp;</span>
            {singleEvent.tickets}
          </p>
          <p>
            <span className="single-event-bold">Start Time:&nbsp;</span>
            {singleEvent.startTime?.split(" ").join(" @ ")}
          </p>
          <p>
            <span className="single-event-bold">End Time:&nbsp;</span>
            {singleEvent.endTime?.split("T").join(" @ ").slice(0, -1)}
          </p>
          <section className="container">
            <div className="product-quantity">
              <h3>Quantity&nbsp;&nbsp;</h3>
              <div className="single-event-input">{qty}</div>
              <div className="quantity-selectors-container">
                <div className="quantity-selectors">
                  <button type="button" onClick={decrease}>
                    <span>&#8722;</span>
                  </button>
                  <button type="button" onClick={increase}>
                    <span>&#43;</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div id="single-event-seat-box">
            <p>Seat</p>
            <select>
              <option value="Row 1">Row 1</option>
              <option value="Row 2">Row 2</option>
              <option value="Row 3">Row 3</option>
              <option value="Row 4">Row 4</option>
            </select>
          </div>
          <button id="single-event-button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
