import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleEvent } from "../";
import { useParams } from "react-router-dom";
import SeatChart from "../seat-chart/SeatChart";
import axios from "axios";
import { increment } from "../../store/orders/itemNumberSlice";

const SingleEvent = () => {
  const [qty, setQty] = React.useState(1);
  const [singleEvent, setSingleEvent] = React.useState({});
  const [visible, setVisible] = React.useState(false);
  const [seats, setSeats] = React.useState([]);

  const dispatch = useDispatch();
  const { id } = useParams();

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
    if (seats.length === 0) {
      alert("Please select a seat before adding to cart.");
      return;
    }
    const token = window.localStorage.getItem("token");
    if (singleEvent.tickets - seats.length >= 0) {
      if (!window.localStorage.getItem("token")) {
        let cart = JSON.parse(window.localStorage.getItem("cart"));
        cart.lineitems.push({
          id: Math.floor(Math.random() * 10000),
          qty: seats.length,
          seat: seats.join(";"),
          events: [
            {
              id: id,
              name: singleEvent.name,
              location: singleEvent.location,
              img: singleEvent.img,
              tickets: singleEvent.tickets,
              price: singleEvent.price,
            },
          ],
        });
        window.localStorage.setItem("cart", JSON.stringify(cart));
        dispatch(increment());
        alert("Item Added!");
      } else {
        await axios.put(
          "/api/users/cart",
          {
            eventId: singleEvent.id,
            qty: seats.length,
            seat: seats.join(";"),
          },
          { headers: { authorization: token } }
        );
        dispatch(increment());
        alert("Item Added!");
      }
    } else {
      alert("not enough tickets");
    }
  };

  return (
    <div id="single-event-root-container">
      <SeatChart
        visible={visible}
        setVisible={setVisible}
        singleEvent={singleEvent}
        setSeats={setSeats}
        seats={seats}
        setQty={setQty}
      />
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
          <p>
            <span className="single-event-bold">Price:&nbsp;</span>
            {`   $${singleEvent.price ? singleEvent.price.toFixed(2) : 0}`}
          </p>
          <section className="container">
            <div className="product-quantity">
              <p>Quantity&nbsp;&nbsp;</p>
              <div className="single-event-input">{qty}</div>
              <div className="quantity-selectors-container">
                {/* <div className="quantity-selectors">
                  <button type="button" onClick={decrease}>
                    <span>&#8722;</span>
                  </button>
                  <button type="button" onClick={increase}>
                    <span>&#43;</span>
                  </button>
                </div> */}
              </div>
            </div>
          </section>
          <div id="single-event-seat-box">
            <p>Seats</p>
            <button
              onClick={() => {
                setVisible(!visible);
                console.log(visible, "pressed");
              }}
            >
              Select seats
            </button>
            {/* <p>Seat</p>
            <select>
              <option value="Row 1">Row 1</option>
              <option value="Row 2">Row 2</option>
              <option value="Row 3">Row 3</option>
              <option value="Row 4">Row 4</option>
            </select> */}
          </div>
          <button id="single-event-button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
        <div className="maps-container">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA_Ii5AJrqAY-lWvingSP-oiHDnRGVesPA
            &q=${singleEvent.longitude},${singleEvent.latitude}&zoom=17`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
