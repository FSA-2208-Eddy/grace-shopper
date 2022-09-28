import React, { useState } from "react";

const Seat = ({ purchased, seat, seats, selectedSeats, setSelectedSeats }) => {
  const [selected, setSelected] = useState(
    seats.indexOf(seat) > -1 ? true : false
  );
  return (
    <div
      className={
        purchased === true
          ? "purchased-seat"
          : `${selected ? "selected-seat" : "seat"}`
      }
      onClick={() => {
        if (!purchased) {
          if (!selected) {
            setSelectedSeats([...selectedSeats, seat]);
          } else {
            setSelectedSeats(
              selectedSeats.filter((currentSeat) => currentSeat !== seat)
            );
          }
          setSelected(!selected);
        }
      }}
    >
      {seat}
    </div>
  );
};

export default Seat;
