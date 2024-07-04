import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ContentComponent() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(currentPage)
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [currentPage]);

  async function fetchData(page) {
    const response = await axios.get(
      `https://ba.nahrawandacademy.com/api/content?page=${page}`
    );
    console.log(response.data);
    return response.data.contents;
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
            {/* Render content item */}
            <div className="product__item">
              <div className="product__item__container">
                <img
                  className="product__item__pic set-bg w-100"
                  src={`https://ba.nahrawandacademy.ma/storage/flex/${item.imageFlex}`}
                  alt={`Product Image for ${item.name}`}
                />
                <div className="ep">18 / 18</div>
                <div className="comment__content__card">
                  <i className="fa fa-comments" /> 11
                </div>
                <div className="view__content__card">
                  <i className="fa fa-eye" /> 9141
                </div>
              </div>
              <div className="product__item__text">
                <ul>
                  <li>{item.contentType}</li>
                </ul>
                <h5>
                  <a href="#">{item.title}</a>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="product__pagination">
        <a href="#" class="current-page">
          1
        </a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">
          <i class="fa fa-angle-double-right"></i>
        </a>
      </div>
    </div>
  );
}
