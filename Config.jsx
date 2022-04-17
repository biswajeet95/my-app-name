import React from "react";
import { VscTriangleDown,VscSearch,VscTable } from "react-icons/vsc";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function Config() {
  const [fastDate,setFastDate] = useState(null);
  const [lastDate,setLastDate] = useState(null);
  return (


    <div class="container   config-container">
       <div class="row">
        <div class="col-sm-2">
          
            <h6>Micro Composting Center (MCC)</h6>
          
         
        </div>
        <div class="col-sm-2 icon-dropdown">
          
            <h6>Facility</h6>
            <VscTriangleDown />
         
        </div>
        <div className="col-sm-1 or-col ">
     
                <h5>OR</h5>  
          
          
        </div> 
  
        <div class="col-sm-2 icon-search">
         
            <h6>Facility ID</h6>
            <VscSearch className="sr-btn" color="#9b4805" size="1em" />
          
        </div>

        <div class="col-sm-1">
       
          </div>


        <div class="col-sm-2 picker-icon">
          <div>
              <div>
             <DatePicker
            selected={fastDate}
            placeholderText="Start Date  "
            className="date-box"
            onChange={(date) => setFastDate(date)}
          >
            
          </DatePicker>
        
            
         </div>
          <span>
             <VscTable className="m-icon" color="gray" size="1em" />
          </span>
          </div>
       
        </div>
        <div class="col-sm-2 picker-icon">
          <div>
                  <div>
            <DatePicker
            selected={lastDate}
            placeholderText="End Date  "
            className="date-box"
            onChange={(date) => setLastDate(date)}
          ></DatePicker>
       
            
       </div>
          <span>
             <VscTable className="m-icon" color="gray" size="1em" />
          </span>
          </div>
 
        </div>
      </div> 
    </div>
  );
}

export default Config;
