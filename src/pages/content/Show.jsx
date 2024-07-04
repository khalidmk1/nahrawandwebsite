import React from "react";
import ContentComponent from "./partial/ContentComponent";
import ContentQuicklyComponent from "./partial/ContentQuicklyComponent";

export default function Show() {
  return (
    <>
      <div class="container mt-4 ">
        <div class="row row__container justify-content-center">
          <div class="col-sm-6 ">
            <div className="row titleContentStyle">
              <div className="col-lg-8 col-md-8 col-sm-6 ">
                <div className="section-title position-relative">
                  <h4 className="content__title">Content</h4>
                </div>
              </div>
            </div>
            <ContentComponent />
          </div>
          <div class="col-sm-3">
          <div className="row titleContentStyle">
              <div className="col-lg-8 col-md-8 col-sm-6 ">
                <div className="section-title position-relative">
                  <h4 className="content__title">Quickly</h4>
                </div>
              </div>
            </div>
            <ContentQuicklyComponent/>
          </div>
        </div>
      </div>
    </>
  );
}
