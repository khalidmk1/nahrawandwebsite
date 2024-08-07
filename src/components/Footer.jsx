import React, { useEffect, useState } from "react";
import axios from "axios";

async function fetchData() {
  const response = await axios.get(
    "https://nahrawandacademy.ma/api/mobile/populare/speaker"
  );
  return response.data;
}

export default function Footer() {
  const [data, setData] = useState(null);
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <>
      <section id="footer">
        <div className="footer_m clearfix">
          <div className="container">
            <div className="row footer_1 justify-content-between">
              <div className="col-md-4 ">
                <div className="footer_1i text-start">
                  <h3>
                    <a className="text-white" href="index.html">
                      <img
                        src="img/logonahrawand.png"
                        alt="logo"
                        className="col_red me-1 logo_img"
                      />
                    </a>
                  </h3>
                  <p className="mt-3">
                    Nahrawand Academy is the first human and personal
                    development structure promoting Moroccan culture and
                    identity with high level training and coaching programs
                    adapted to the Moroccan conjuncture and needs.
                  </p>
                  <h6 className="fw-normal">
                    <i className="fa fa-map-marker fs-5 align-middle col_red me-1" />{" "}
                    la villette, Cosmos 4 rue 1, Casablanca 20250
                  </h6>
                  <h6 className="fw-normal mt-3">
                    <i className="fa fa-envelope fs-5 align-middle col_red me-1" />{" "}
                    nahrawadn@gmail.com
                  </h6>
                  <h6 className="fw-normal mt-3 mb-0">
                    <i className="fa fa-phone fs-5 align-middle col_red me-1" />{" "}
                    0522616800
                  </h6>
                </div>
              </div>

              <div className="col-md-4">
                <div className="footer_1i">
                  <h4>
                    News <span className="col_red">Nahrawand</span>
                  </h4>
                  <p className="mt-3">
                    Subscribe to our newsletter list to get latest news and
                    updates from us
                  </p>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-black"
                      placeholder="Email"
                    />
                    <span className="input-group-btn">
                      <button
                        className="btn btn text-white bg_red rounded-0 border-0"
                        type="button"
                      >
                        Subscribe
                      </button>
                    </span>
                  </div>
                  <ul
                    className="social-network social-circle mb-0 mt-4"
                    style={{
                      gap: "5px",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <li>
                      <a
                        href="https://www.instagram.com/mynahrawandacademy/"
                        className="icoRss"
                        title="Rss"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/nahrawandacademyofficial/"
                        className="icoFacebook"
                        title="Facebook"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@nahrawandacademy/featured"
                        className="icoGoogle"
                        title="Youtube +"
                      >
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/nahrawandacedemy/?originalSubdomain=ma"
                        className="icoLinkedin"
                        title="Linkedin"
                      >
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="footer_b" className="pt-3 pb-3 bg_grey">
        <div className="container">
          <div className="row footer_1">
            <div className="col-md-8">
              <div className="footer_1l">
                <p className="mb-0">
                  © {new Date().getFullYear()} Your Website Name. All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
