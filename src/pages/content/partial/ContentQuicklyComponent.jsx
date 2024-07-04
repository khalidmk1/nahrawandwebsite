import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ContentQuicklyComponent() {
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
    return response.data.contentQuicly;
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
          <div className="product__sidebar__comment">
            <div className="product__sidebar__comment__item">
              <div className="product__sidebar__comment__item__pic">
                <img src={`https://ba.nahrawandacademy.ma/storage/flex/${item.imageFlex}`}
                  alt={`Product Image for ${item.name}`} className="image__quickly" />
              </div>
              <div className="product__sidebar__comment__item__text">
                <ul className="d-flex">
                  <li>{item.contentType}</li>
                </ul>
                <h5  className="d-flex">
                  <a href="#">{item.title}</a>
                </h5>
                <span>
                  <i className="fa fa-eye" /> 19.141 Viewes
                </span>
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
