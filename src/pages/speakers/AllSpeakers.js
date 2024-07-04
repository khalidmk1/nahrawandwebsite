import React, { useEffect, useState } from "react";
import axios from "axios";

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
  const totalPages = Math.ceil(SpeakersData.length / speakersPerPage);
  return (
    <>
      <section id="center" className="center_o pt-2 pb-2">
        <div className="container-xl">
          <div className="row center_o1">
            <div className="col-md-5">
              <div className="center_o1l">
                <h2 className="mb-0">All Speakers</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="center_o1r text-end">
                <h6 className="mb-0 col_red">
                  <a href="#">Home</a>{" "}
                  <span className="me-2 ms-2 text-light">
                    <i className="fa fa-caret-right align-middle" />
                  </span>{" "}
                  Speakers
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="pt-4 pb-4 bg_grey">
        <div className="container-xl">
          <div className="team_1i row">
            {currentSpeakers.map((speaker, index) => (
              <div
                className="col-md-4" // Adjusted col-md-3 to col-md-4 for better layout
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
                  <div className="team_1i1i1 clearfix position-absolute w-100 bottom-0">
                    <h4 className="col_red">{speaker.fullName} </h4>
                    <h6>{speaker.roles.join(", ")}</h6>
                    <p
                      style={{
                        overflow: "hidden",
                        width: "90%",
                      }}
                    >
                      {speaker.biographie}
                    </p>
                    <ul
                      className="social-network social-circle mb-0 mt-3"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                      }}
                    >
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
          {/* Pagination */}
          <nav
            aria-label="Page navigation example"
            className="d-flex justify-content-center"
          >
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(currentPage - 1)}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  <button onClick={() => paginate(i + 1)} className="page-link">
                    {i + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(currentPage + 1)}
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
