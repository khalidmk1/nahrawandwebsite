import React, { useEffect, useState } from "react";
import axios from "axios";
import ModelDownload from "../../components/ModelDownload";

export default function SliderComming() {
  const [loading, setLoading] = useState(true);
  const [commingsoon, setCommingsoon] = useState([]);
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://ba.nahrawandacademy.com/api/content/coming`
      );
      setCommingsoon(response.data.contents || []);
      setVideos(response.data.vidoes || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data commingsoon:", error);
    }
  };

  useEffect(() => {
    const fetchDataAndRefreshInterval = async () => {
      await fetchData();
      const refreshInterval = setInterval(fetchData, 20000);
      return () => clearInterval(refreshInterval);
    };
    fetchDataAndRefreshInterval();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const combinedItems = [
    ...commingsoon.map((item) => ({ ...item, type: "content" })),
    ...videos.map((item) => ({ ...item, type: "video" })),
  ];

  return (
    <>
      <section id="center" className="center_home">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {combinedItems.map((item, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {combinedItems.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{ height: "669px" }}
              >
                <img
                  src={
                    item.type === "content"
                      ? `https://ba.nahrawandacademy.com/storage/content/` +
                        item.image
                      : `https://ba.nahrawandacademy.com/storage/video/` +
                        item.image
                  }
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                  style={{ height: "100%" }}
                />
                <div className="carousel-caption d-md-block">
                  {item.type === "content" && (
                    <>
                      <h1 className="font_60">{item.title}</h1>
                      <h6 className="mt-3">
                        <span className="col_red me-3">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                        </span>
                        {`${new Date(item.created_at).getFullYear()}-${(
                          new Date(item.created_at).getMonth() + 1
                        )
                          .toString()
                          .padStart(2, "0")}-${new Date(item.created_at)
                          .getDate()
                          .toString()
                          .padStart(2, "0")}`}
                      </h6>
                      <p className="mt-3">{item.smallDescription}</p>
                      <p className="mb-2">
                        <span className="col_red me-1 fw-bold">Tags:</span>{" "}
                        {item.tags.map((tag) => tag.name.en).join(", ")}
                      </p>
                      <h6 className="mt-4">
                        <button
                          className="button"
                          onClick={() => setShowModal(true)}
                        >
                          <span className="align-middle me-1">
                            <i className="fa fa-download"></i>
                          </span>
                          Download App
                        </button>
                      </h6>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          {showModal && <ModelDownload setShowModal={setShowModal} />}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
            style={{ visibility: "hidden" }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
            style={{ visibility: "hidden" }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}
