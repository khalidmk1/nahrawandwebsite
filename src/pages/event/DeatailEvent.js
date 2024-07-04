import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function DeatailEvent() {
  const location = useLocation();
  const { event } = location.state || {};
  const imageUrl = `https://ba.nahrawandacademy.com/storage/event/${event.image}`;

  return (
    <section className="anime-details spad">
      <div className="container">
        <div className="anime__details__content">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="anime__details__pic set-bg"
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
            </div>
            <div className="col-lg-9">
              <div className="anime__details__text">
                <div className="anime__details__title">
                  <h3>{event.title}</h3>
                  <span>{event.dateStart}</span>
                </div>
                <p>{event.description}</p>
                <div class="anime__details__widget">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <ul>
                                            <li><span>Type:</span> TV Series</li>
                                            <li><span>Studios:</span> Lerche</li>
                                            <li><span>Date aired:</span> Oct 02, 2019 to ?</li>
                                            <li><span>Status:</span> Airing</li>
                                            <li><span>Genre:</span> Action, Adventure, Fantasy, Magic</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <ul>
                                            <li><span>Scores:</span> 7.31 / 1,515</li>
                                            <li><span>Rating:</span> 8.5 / 161 times</li>
                                            <li><span>Duration:</span> 24 min/ep</li>
                                            <li><span>Quality:</span> HD</li>
                                            <li><span>Views:</span> 131,541</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                <div className="anime__details__btn">
                  <a href={event.url} className="watch-btn" target="_blank">
                    <span>Book Now</span> <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </section>
  );
}
