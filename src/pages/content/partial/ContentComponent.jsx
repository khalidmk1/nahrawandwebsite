import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ContentComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchData(currentPage)
      .then((data) => {
        setData(data);
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

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

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
                <ul className="d-flex">
                  <li>{item.contentType}</li>
                </ul>
                <h5 className="d-flex">
                  <Link className="button" to="/detail" state={{ item }}>
                    {item.title}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="product__pagination">
        {[...Array(totalPages).keys()].map((page) => (
          <a
            href="#"
            key={page}
            className={page + 1 === currentPage ? "current-page" : ""}
            onClick={() => handlePageClick(page + 1)}
          >
            {page + 1}
          </a>
        ))}
      </div>
    </div>
  );
}
