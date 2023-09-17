import React from "react";

function Home() {
  return (
    <div className="container w-50 ">
      <h2 className="fw-bolder mt-3 p-3 text-center my-4 ">Sheduled Tours</h2>
      <div className="d-flex-row  rounded-3 shadow p-2  fw-bold">
        <p className="text-center">JUL16</p>
        <p className="text-center">DETROIT, MI</p>
        <p className="text-center">DTE ENERGY MUSIC THEATRE</p>
        <p className="text-center">
          <button className="btn btn-outline-danger">BUY TICKETS</button>
        </p>
      </div>
      <div className="d-flex-row  rounded-3 shadow p-2 my-4  fw-bold">
        <p className="text-center">JUL19</p>
        <p className="text-center">TORONTO, ON</p>
        <p className="text-center">BUDWEISER STAGE</p>
        <p className="text-center">
          <button className="btn btn-outline-danger">BUY TICKETS</button>
        </p>
      </div>
      <div className="d-flex-row  rounded-3 shadow p-2 my-4 fw-bold">
        <p className="text-center">JUL22</p>
        <p className="text-center"> BRISTOW, VA</p>
        <p className="text-center">JIGGY LUBE LIVE</p>
        <p className="text-center">
          <button className="btn btn-outline-danger">BUY TICKETS</button>
        </p>
      </div>
      <div className="d-flex-row  rounded-3 shadow p-2 my-4 fw-bold">
        <p className="text-center">JUL29</p>
        <p className="text-center">PHOENIX, AZ</p>
        <p className="text-center"> AK-CHIN PAVILIONE</p>
        <p className="text-center">
          <button className="btn btn-outline-danger">BUY TICKETS</button>
        </p>
      </div>
      <div className="d-flex-row  rounded-3 shadow p-2 my-4 fw-bold">
        <p className="text-center"> AUG 2</p>
        <p className="text-center">LAS VEGAS, NV</p>
        <p className="text-center">T-MOBILE ARENA</p>
        <p className="text-center">
          <button className="btn btn-outline-danger">BUY TICKETS</button>
        </p>
      </div>
    </div>
  );
}

export default Home;
