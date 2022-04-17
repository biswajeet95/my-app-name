import React from "react";
import { VscTriangleDown } from "react-icons/vsc";
import { useState } from "react";
import  Dropdown  from "./Dropdown";

function Dashboard() {
  const [selected, setSelected] = useState( " ");
  return (
    <>
      <div className="container dashboard">
        <div class="row pr-head">
          <div className="col">
            <h4>MCC Stats</h4>
            <p>SORT BY</p>
          </div>
          <div className="col">
            <h4>MRF Stats</h4>
            <p>SORT BY</p>
          </div>
        </div>

        <div className="row progress-head">
     
          <Dropdown selected={selected} setSelected={setSelected}/>

          <Dropdown selected={selected} setSelected={setSelected}/>

          {/* <div className="col">
            <h5>Compost Sold</h5>
            <VscTriangleDown color="red" size="1em" />
          
          </div> */}
        </div>

        <div className="row progress-section">
          <div className="col progress-file">
            <div>
              <div className="percentage-div">
                <div>
                  <h1>#1</h1>

                  <div class="col">
                    <h3>Ragadi</h3>
                    <p>DKL/DHU/MCC/002</p>
                  </div>
                </div>

                <div className=" progress-name">
                  <div>
                    <h3>1792.62</h3>
                    <p>TONNES</p>
                  </div>
                </div>
              </div>
              <div className="progress">
                <div className="pro-bar"></div>
              </div>
            </div>
            {/* ///////////// */}
            <div>
              <div className="percentage-div">
                <div>
                  <h1>#1</h1>

                  <div class="col">
                    <h3>Ragadi</h3>
                    <p>DKL/DHU/MCC/002</p>
                  </div>
                </div>

                <div className=" progress-name">
                  <div>
                    <h3>1792.62</h3>
                    <p>TONNES</p>
                  </div>
                </div>
              </div>
              <div className="progress">
                <div className="pro-bar-2"></div>
              </div>
            </div>

            {/* ///////////// */}
            <div>
              <div className="percentage-div">
                <div>
                  <h1>#1</h1>

                  <div class="col">
                    <h3>Ragadi</h3>
                    <p>DKL/DHU/MCC/002</p>
                  </div>
                </div>

                <div className=" progress-name">
                  <div>
                    <h3>1792.62</h3>
                    <p>TONNES</p>
                  </div>
                </div>
              </div>
              <div className="progress">
                <div className="pro-bar-3"></div>
              </div>
            </div>
            {/* ///////////// */}
            <div>
              <div className="percentage-div">
                <div>
                  <h1>#1</h1>

                  <div class="col">
                    <h3>Ragadi</h3>
                    <p>DKL/DHU/MCC/002</p>
                  </div>
                </div>

                <div className=" progress-name">
                  <div>
                    <h3>1792.62</h3>
                    <p>TONNES</p>
                  </div>
                </div>
              </div>
              <div className="progress">
                <div className="pro-bar-4"></div>
              </div>
            </div>
          </div>

          <div class="col progress-file">
            <div>
              <div className="percentage-div">
                <div>
                  <h1>#1</h1>

                  <div class="col">
                    <h3>Ragadi</h3>
                    <p>DKL/DHU/MCC/002</p>
                  </div>
                </div>

                <div className=" progress-name">
                  <div>
                    <h3>1792.62</h3>
                    <p>TONNES</p>
                  </div>
                </div>
              </div>
              <div className="progress">
                <div className="pro-bar"></div>
              </div>
            </div>
            {/* ///////////// */}
            <div>
              <div className="percentage-div">
                <div>
                  <h1>#1</h1>

                  <div class="col">
                    <h3>Ragadi</h3>
                    <p>DKL/DHU/MCC/002</p>
                  </div>
                </div>

                <div className=" progress-name">
                  <div>
                    <h3>1792.62</h3>
                    <p>TONNES</p>
                  </div>
                </div>
              </div>
              <div className="progress">
                <div className="pro-bar-2"></div>
              </div>
            </div>

            {/* ///////////// */}
            <div>
              <div className="percentage-div">
                <div>
                  <h1>#1</h1>

                  <div class="col">
                    <h3>Ragadi</h3>
                    <p>DKL/DHU/MCC/002</p>
                  </div>
                </div>

                <div className=" progress-name">
                  <div>
                    <h3>1792.62</h3>
                    <p>TONNES</p>
                  </div>
                </div>
              </div>
              <div className="progress">
                <div className="pro-bar-3"></div>
              </div>
            </div>
            {/* ///////////// */}
            <div>
              <div className="percentage-div">
                <div>
                  <h1>#1</h1>

                  <div class="col">
                    <h3>Ragadi</h3>
                    <p>DKL/DHU/MCC/002</p>
                  </div>
                </div>

                <div className=" progress-name">
                  <div>
                    <h3>1792.62</h3>
                    <p>TONNES</p>
                  </div>
                </div>
              </div>
              <div className="progress">
                <div className="pro-bar-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
