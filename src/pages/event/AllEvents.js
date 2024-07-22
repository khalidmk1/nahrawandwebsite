import React from "react";

export default function AllEvents() {
  return (
    <>
      <section id="center" className="center_o pt-2 pb-2">
        <div className="container-xl">
          <div className="row center_o1">
            <div className="col-md-5">
              <div className="center_o1l">
                <h2 className="mb-0">Team</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="center_o1r text-end">
                <h6 className="mb-0 col_red">
                  <a href="#">Home</a>{" "}
                  <span className="me-2 ms-2 text-light">
                    <i className="fa fa-caret-right align-middle" />
                  </span>{" "}
                  Team
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="pt-4 pb-4 bg_grey">
        <div className="container-xl">
          <div className="team_1i row">
            <div className="col-md-4">
              <div className="team_1i1 clearfix position-relative">
                <div className="team_1i1i clearfix">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <a href="#">
                        <img src="img/38.jpg" className="w-100" alt="abc" />
                      </a>
                    </figure>
                  </div>
                </div>
                <div
                  className="team_1i1i1 clearfix position-absolute w-100 bottom-0"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                >
                  <h4 className="col_red">event tiltle</h4>
                  <h6>date</h6>
                  <p>description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
