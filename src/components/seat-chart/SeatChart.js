import React from "react";
import Seat from "./Seat";
const SeatChart = ({ visible, setVisible, singleEvent, setSeats, seats }) => {
  console.log("from SEATCHART", singleEvent);
  const [selectedSeats, setSelectedSeats] = React.useState([]);
  const makeSeatChart = () => {
    let seats = [];
    const alphabet = "ABCDEFGHIJ";
    for (let i = 0; i < alphabet.length; i++) {
      let current = alphabet[i];
      for (let j = 1; j <= 12; j++) {
        seats.push(`${current}${j}`);
      }
    }
    return seats;
  };
  const emptySeats = makeSeatChart();
  return (
    <div className={visible ? "seat-backdrop" : null}>
      {visible ? (
        <div className="seat-chart-container-main">
          <div
            className="saveSeats"
            onClick={() => {
              console.log("selectedSeats", selectedSeats);
              setSeats([...selectedSeats]);
              setVisible(!visible);
            }}
          >
            Save
          </div>
          <button
            className="close-seat-chart"
            onClick={() => setVisible(!visible)}
          >
            x
          </button>
          <div className="seat-chart-container">
            {emptySeats.map((seat, idx) => {
              return (
                <Seat
                  key={idx}
                  seat={seat}
                  seats={seats}
                  selectedSeats={selectedSeats}
                  setSelectedSeats={setSelectedSeats}
                  purchased={!singleEvent?.seats?.includes(seat) ? true : false}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SeatChart;
