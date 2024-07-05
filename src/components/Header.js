import React from "react";
import { Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <section id="center" className="center_o pt-2 pb-2">
      <div className="container-xl">
        <div className="row center_o1">
          <div className="col-md-5">
            <div className="center_o1l">
              <h2 className="mb-0">{title}</h2>
            </div>
          </div>
          <div className="col-md-7">
            <div className="center_o1r text-end">
              <h6 className="mb-0 col_red">
                <Link href="#" to={`/`}>
                  Home
                </Link>
                <span className="me-2 ms-2 text-light">
                  <i className="fa fa-caret-right align-middle" />
                </span>
                Contact
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
