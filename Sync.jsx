import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function Sync() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [endDate, setEedDate] = useState(null);
  const [poPup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!poPup);
  };
  const closePopUp = () => {
    setPop(false);
  };
  return (
    <>
      <div className="container sync-containter">
        <div className="row last-hd">
          <div>
            <h5>Waste Data Sync</h5>
          </div>
          <div className="col">
            <div>
              <p>LAST SYNC</p>
              <h3>2022-03-31</h3>
            </div>
            <button onClick={handleClickOpen}>Sync Now</button>
          </div>
          {poPup ? (
            <div className=" popup-container">
              <div className="col popup">
                <div>
                <button className="close"  onClick={closePopUp}>X</button>
                  <DatePicker
                    selected={selectedDate}
                    placeholderText="Start Date  "
                    className="date-box"
                    onChange={(date) => setSelectedDate(date)}
                  ></DatePicker>

                  <DatePicker
                    selected={endDate}
                    placeholderText="End Date  "
                    className="date-box"
                    onChange={(date) => setEedDate(date)}
                  ></DatePicker>

                  <button className="date-btn">Search</button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Sync;
