import React, { useEffect, useState } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import axios from "axios";

async function fetchData(itemId) {
  const response = await axios.get(
    `https://ba.nahrawandacademy.com/api/content/all/comment/${itemId}`
  );
  return response.data;
}

export default function ContentCommentComponent({ itemId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (itemId) {
      fetchData(itemId)
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [itemId]);

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
      {data.map((comment, index) => (
        <div className="anime__review__item" key={index}>
          <div className="anime__review__item__pic">
            <img
              src={`https://ba.nahrawandacademy.ma/storage/avatars/${comment.user.avatar}`}
              alt={`Product Image for ${comment.user.fullName}`}
            />
          </div>
          <div className="anime__review__item__text detail__section">
            <h6>
              {comment.user.fullName} -{" "}
              <span>
                {formatDistanceToNow(parseISO(comment.updated), {
                  addSuffix: true,
                })}
              </span>
            </h6>
            <p>{comment.comment}</p>
          </div>
        </div>
      ))}
    </>
  );
}
