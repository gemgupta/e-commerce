import React from "react";
import im from "./austin-neill-hgO1wFPXl3I-unsplash.jpg";

function About() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={im}
            className="d-block mx-lg-auto img-fluid rounded-2"
            alt=""
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-4">
            Providing Best Music Since 1999
          </h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus facilis qui expedita maxime nihil at officiis earum aut,
            consectetur rerum ratione eaque unde quas laborum iusto modi,
            explicabo neque iste provident praesentium pariatur accusantium odit
            in. Necessitatibus asperiores, cumque numquam praesentium saepe
            doloremque quia magnam hic consequuntur atque, laboriosam assumenda.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default About;
