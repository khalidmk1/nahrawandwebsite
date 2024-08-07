import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Eventsection() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "https://ba.nahrawandacademy.com/api/event"
      );
      setEvents(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    const fetchDataAndRefreshInterval = async () => {
      await fetchEvents();
      const refreshInterval = setInterval(fetchEvents, 20000);
      return () => clearInterval(refreshInterval);
    };
    fetchDataAndRefreshInterval();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };
  const eventChunks = chunkArray(events, 3);
  return (
    <section id="upcome" className="pt-4 pb-5">
      <div className="container">
        
            <div class="row trend_1">
          <div class="col-md-6 col-6">
            <div class="trend_1l text-start">
              <h4 class="mb-0">
                <i class="fa fa-youtube-play align-middle col_red me-1"></i>
                Upcoming <span class="col_red ">Events</span>
              </h4>
            </div>
          </div>
          <div class="col-md-6 col-6">
            <div class="trend_1r text-end">
              <h6 class="mb-0"><Link class="button" to={`/AllEvents`}> View All</Link></h6>
            </div>
          </div>
        </div>
        <div className="row trend_2 mt-4">
          <div
            id="carouselExampleCaptions2"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {eventChunks.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleCaptions2"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {eventChunks.map((chunk, chunkIndex) => (
                <div
                  key={chunkIndex}
                  className={`carousel-item ${
                    chunkIndex === 0 ? "active" : ""
                  }`}
                >
                  <div className="trend_2i row">
                    {chunk.map((event) => (
                      <div key={event.id} className="col-md-3">
                        <div className="trend_2im clearfix position-relative">
                          <div className="trend_2im1 clearfix">
                            <div className="grid">
                              <figure className="effect-jazz mb-0">
                                <Link href="#" to={`/DeatailEvent`} state={{ event }}>
                                  <img
                                    src={`https://ba.nahrawandacademy.com/storage/event/${event.image}`}
                                    className="w-100"
                                    alt={event.title}
                                    style={{ height: 180 }}
                                  />
                                </Link>
                              </figure>
                            </div>
                          </div>
                        </div>
                        <div className="trend_2ilast bg_grey p-3 clearfix">
                          <h5>
                            <a className="col_red" href="#">
                              {event.title.substring(0, 30)}...
                            </a>
                          </h5>
                          <p className="mb-2">
                            {event.description.substring(0, 100)}...
                          </p>
                          <p className="mb-0">
                            <i className="fa fa-clock-o align-middle col_red me-1"></i>
                            {event.dateStart}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
