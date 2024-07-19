import React from "react";
import { useLocation } from "react-router-dom";
import ContentCommentComponent from "./partial/ContentCommentComponent";
import ContentNewsComponent from "./partial/ContentNewsComponent";

export default function Detail() {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return <div>No item data available</div>;
  }
  return (
    <>
      <div className="container mt-5">
        <div className="anime__details__content">
          <div className="row ">
            <div className="col-lg-3">
              <div className="product__item__container">
                <img
                  className="product__item__pic set-bg w-100 h-100"
                  src={`https://ba.nahrawandacademy.ma/storage/flex/${item.imageFlex}`}
                  alt={`Product Image for ${item.title}`}
                />
                <div className="comment__content__card">
                  <i className="fa fa-comments" /> 11
                </div>
                <div className="view__content__card">
                  <i className="fa fa-eye" /> 9141
                </div>
              </div>
            </div>
            <div className="col-lg-9 detail__section">
              <div className="anime__details__text">
                <div className="anime__details__title">
                  <h3>{item.title}</h3>
                </div>
                <p>{item.smallDescription}</p>
                <div className="anime__details__widget">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <ul>
                        <li>
                          <span>Type:</span> {item.contentType}
                        </li>
                        <li>
                          <span>Host:</span>{" "}
                          {item.user.firstName + " " + item.user.lastName}
                        </li>
                        <li>
                          <span>Date Created:</span> {item.created_at}
                        </li>
                        <li>
                          <span>Status:</span>{" "}
                          {item.isActive == 1 ? "Active" : ""}
                        </li>
                        <li>
                          <span>Genre:</span>{" "}
                          {item.tags.map((tag, index) => (
                            <React.Fragment key={tag.id}>
                              {tag.name.en}
                              {index !== item.tags.length - 1 && ", "}
                            </React.Fragment>
                          ))}
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <ul>
                        <li>
                          <span>Duration:</span> {item.duration}
                        </li>
                        <li>
                          <span>Quality:</span> HD
                        </li>
                        <li>
                          <span>Views:</span> 1
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="anime__details__btn">
                  <a href="#" className="follow-btn">
                    <i className="fa fa-heart-o" /> Follow
                  </a>
                  <a href="#" className="watch-btn">
                    <span>Watch Now</span> <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="anime__details__review">
              <div className="row titleContentStyle">
                <div className="col-lg-8 col-md-8 col-sm-6 ">
                  <div className="section-title position-relative">
                    <h4 className="content__title">Comment</h4>
                  </div>
                </div>
              </div>
              <ContentCommentComponent itemId={item.id} />
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="anime__details__sidebar">
              <div className="row titleContentStyle">
                <div className="col-lg-8 col-md-8 col-sm-6 ">
                  <div className="section-title position-relative">
                    <h4 className="content__title">Content You My Like</h4>
                  </div>
                </div>
              </div>

              <ContentNewsComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
