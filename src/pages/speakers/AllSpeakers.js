import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function AllSpeakers() {
  const [SpeakersData, setSpeakersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const speakersPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ba.nahrawandacademy.com/api/speakers`
        );
        setSpeakersData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  // Logic to paginate speakers
  const indexOfLastSpeaker = currentPage * speakersPerPage;
  const indexOfFirstSpeaker = indexOfLastSpeaker - speakersPerPage;
  const currentSpeakers = SpeakersData.slice(
    indexOfFirstSpeaker,
    indexOfLastSpeaker
  );
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Header title={"Speakers"} />

      <section id="team" className="pt-4 pb-4 bg_grey">
        <div className="container-xl">
          <div className="team_1i row">
            {currentSpeakers.map((speaker, index) => (
              <div
                className="col-md-4"
                key={index}
                style={{
                  margin: "5px 0",
                }}
              >
                <div
                  className="team_1i1 clearfix position-relative"
                  style={{
                    height: "400px",
                    padding: 5,
                  }}
                >
                  <div className="team_1i1i clearfix">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <a href="#">
                          <img
                            style={{
                              height: "400px",
                              borderRadius: "5px",
                              opacity: 0.3,
                            }}
                            src={
                              "https://ba.nahrawandacademy.com/storage/avatars/" +
                              speaker.avatar
                            }
                            className="w-100"
                            alt={speaker.name}
                          />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="team_1i1i1 clearfix position-absolute w-100 bottom-0" >
                    <h4 className="col_red">{speaker.fullName} </h4>
                    <h6>{speaker.roles.join(", ")}</h6>
                    <p
                      style={{
                        overflow: "hidden",
                        width: "95%",
                      }}
                    >
                      {speaker.biographie}
                    </p>
                    <ul className="social-network social-circle mb-0 mt-3">
                      {speaker.instagram && (
                        <li>
                          <a
                            href={speaker.instagram}
                            className="icoRss"
                            title="Instagram"
                          >
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                      )}
                      {speaker.faceboock && (
                        <li>
                          <a
                            href={speaker.faceboock}
                            className="icoFacebook"
                            title="Facebook"
                          >
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                      )}
                      {speaker.linkdin && (
                        <li>
                          <a
                            href={speaker.linkdin}
                            className="icoLinkedin"
                            title="LinkedIn"
                          >
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="product__pagination text-center">
            {Array.from(
              { length: Math.ceil(SpeakersData.length / speakersPerPage) },
              (_, i) => (
                <a
                  key={i}
                  href="#"
                  className={currentPage === i + 1 ? "current-page" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    paginate(i + 1);
                  }}
                >
                  {i + 1}
                </a>
              )
            )}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (
                  currentPage < Math.ceil(SpeakersData.length / speakersPerPage)
                ) {
                  paginate(currentPage + 1);
                }
              }}
            >
              <i className="fa fa-angle-double-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
