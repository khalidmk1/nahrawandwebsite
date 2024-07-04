import React from "react";
import ContentComponent from "./partial/ContentComponent";

export default function Show() {
  return (
    <>
      <div class="container mt-2">
        <div class="row ">
          <div class="col-sm-7 ">
            <div className="row titleContentStyle">
              <div className="col-lg-8 col-md-8 col-sm-6 ">
                <div className="section-title position-relative">
                  <h4>Content</h4>
                </div>
              </div>
            </div>
            <ContentComponent />

           
          </div>
          <div class="col-sm-5">One of three columns</div>
        </div>
      </div>
    </>
  );
}
