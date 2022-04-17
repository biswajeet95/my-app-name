import React from 'react'
import {useState} from "react";
import { VscTriangleDown } from "react-icons/vsc";

function Dropdown({selected, setSelected}) {

    const [isActive, setIsActive] = useState(false);
    const options= ["React " , "Vue" ];
  return (
    <>
    
    <div class="col">
            <div class="col" onClick={(e) => setIsActive(!isActive)}>
              <h5>Compost Sold   </h5>   
              {/* <h5>{selected}  </h5>   */}
              <VscTriangleDown className="drop-icon" color="red" size="1em" />
            </div>
            {isActive && (
              <div className="dropdown-content">
                  {options.map((options) => (
                   <div className="dropdown-item" onClick={(e) => {
                   setSelected(options);
                   setIsActive(false);
                   }}>{options}</div>   
                  ))}
                

            
              </div>
            )}
          </div>
    
    </>
  )
}

export default Dropdown