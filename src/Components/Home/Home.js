import React from "react";

function Home() {
  return (
    <div className="container w-50">
      <h2 className="fw-bolder mt-3 p-3 text-center ">Sheduled Tours</h2>
      <div className="d-flex border-black border-bottom fw-bold text-center p-2">
        <span className="w-25">JUL16</span>
        <span className="w-25">DETROIT, MI</span>
        <span className="w-50">DTE ENERGY MUSIC THEATRE</span>
        <button className="btn btn-outline-danger w-25 mb-1">
          BUY TICKETS
        </button>
      </div>
      <div className="d-flex border-black border-bottom fw-bold text-center p-2">
        <span className="w-25">JUL19</span>
        <span className="w-25">TORONTO, ON</span>
        <span className="w-50">BUDWEISER STAGE</span>
        <button className="btn btn-outline-danger w-25 mb-1">
          BUY TICKETS
        </button>
      </div>
      <div className="d-flex border-black border-bottom fw-bold text-center p-2">
        <span className="w-25">JUL22</span>
        <span className="w-25"> BRISTOW, VA</span>
        <span className="w-50">JIGGY LUBE LIVE</span>
        <button className="btn btn-outline-danger w-25 mb-1">
          BUY TICKETS
        </button>
      </div>
      <div className="d-flex border-black border-bottom fw-bold text-center p-2">
        <span className="w-25">JUL29</span>
        <span className="w-25">PHOENIX, AZ</span>
        <span className="w-50"> AK-CHIN PAVILIONE</span>
        <button className="btn btn-outline-danger w-25 mb-1">
          BUY TICKETS
        </button>
      </div>
      <div className="d-flex border-black border-bottom fw-bold text-center p-2">
        <span className="w-25"> AUG 2</span>
        <span className="w-25">LAS VEGAS, NV</span>
        <span className="w-50">T-MOBILE ARENA</span>
        <button className="btn btn-outline-danger w-25 mb-1">
          BUY TICKETS
        </button>
      </div>
    </div>
  );
}

export default Home;
