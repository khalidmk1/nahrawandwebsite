import React from 'react'

export default function ModelDownload({setShowModal}) {
  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="col_red me-1 fw-bold">
            Download Our Application
          </h5>
        </div>
        <div className="modal-body">
          <img
            src="img/downloadapp1.png"
            alt="Modal Content"
            className="img-fluid"
          />
          <h6 className="mt-4">
            <a
              className="button"
              href="https://wetransfer.com/downloads/1965fed3b69d7de69044d262004d6a4520240603131625/92a712"
              target="_blank"
            >
              <span className="align-middle me-1">
                <i className="fa fa-download"></i>
              </span>{" "}
              Download App
            </a>
          </h6>{" "}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
