import React from "react";

const SingleEvent = () => {
    const [qty, setQty] = React.useState(1)

    const increase = () => {
        setQty(qty + 1)
    }

    const decrease = () => {
        if (qty !== 1) {
            setQty(qty - 1)
        }
    }

  return (
    <div id="single-event-root-container">
      <div id="single-event-row-1">
        <div class="single-event-date">
          <h2>SEP 22nd</h2>
          <p>2022</p>
        </div>
        <div class="single-event-title">Generic Concert Wow so Cool!</div>
      </div>
      <div id="single-event-row-2">
        <img src="./generic-conert.jpeg" />
        <div class="single-event-details">
          <h1>
            <span class="single-event-bold">Location:&nbsp;</span>Chase Center
          </h1>
          <p>
            <span class="single-event-bold">Tickets Remaining:&nbsp;</span>400
          </p>
          <p>
            <span class="single-event-bold">Start Time:&nbsp;</span>7:00 PM,
            September 22nd, 2022
          </p>
          <p>
            <span class="single-event-bold">End Time:&nbsp;</span>11:00 PM,
            September 22nd, 2022
          </p>
          <section class="container">
            <div class="product-quantity">
              <h3>Quantity&nbsp;&nbsp;</h3>
              <div className="single-event-input">{qty}</div>
              <div class="quantity-selectors-container">
                <div class="quantity-selectors">
                  <button type="button" onClick={increase}>
                    <span>&#43;</span>
                  </button>
                  <button type="button" onClick={decrease}>
                    <span>&#8722;</span>
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
          <button id="single-event-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
