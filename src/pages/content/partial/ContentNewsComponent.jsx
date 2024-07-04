import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

async function fetchData() {
  const response = await axios.get(
    "https://ba.nahrawandacademy.com/api/content"
  );
  console.log(response.data);
  return response.data.contents.slice(0, 4);
}

export default function ContentNewsComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

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
    <>
      {data.map((item, index) => (
        <>
          <div className="product__item__container mb-2">
            <Link className="button__content" to="/detail" state={{ item }}>
              <img
                src={`https://ba.nahrawandacademy.ma/storage/content/${item.image}`}
                className="product__item__pic__news  w-100"
                alt=""
              />
            </Link>
            <div className="ep">18 / ?</div>
            <div className="view__content__card__news">
              <i className="fa fa-eye" /> 9141
            </div>
          </div>
        </>
      ))}
    </>
  );
}
