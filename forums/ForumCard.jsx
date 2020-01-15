import React from "react";
import propTypes from "prop-types";
import * as moment from "moment";
import Posts from "./Posts";
const ForumCard = props => {
  const goToThread = e => {
    e.preventDefault();
    props.localClick(props.thread);
  };
  const onLocalDelete = () => {
    props.handleDelete(props.thread);
  };
  const onLocalEdit = () => {
    props.localEdit(props.thread);
  };

  return (
    <React.Fragment>
      <thead className="thead">
        <tr>
          <th scope="col" style={{ border: "none" }}>
            <h4>
              <strong>Subject:</strong> {props.thread.subject}
            </h4>
            <h5>
              <strong>Information:</strong> {props.thread.summary}
            </h5>
            <strong>Posted on:</strong>{" "}
            {moment(props.thread.dateCreated).format("LL")}
            {props.location ? (
              <React.Fragment>
                <hr />
                <p className="mt-3 mb-3">{props.thread.information}</p>
                <hr />
                <Posts location={props.location}></Posts>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="mt-2">
                  <button className="btn btn-primary mr-3" onClick={goToThread}>
                    Read
                  </button>
                  <button
                    className="btn btn-success mr-3"
                    onClick={onLocalEdit}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-secondary mr-3"
                    onClick={onLocalDelete}
                  >
                    Delete
                  </button>
                </div>
              </React.Fragment>
            )}
          </th>
        </tr>
      </thead>
      <hr />
    </React.Fragment>
  );
};
ForumCard.propTypes = {
  thread: propTypes.shape({
    id: propTypes.number,
    subject: propTypes.string,
    summary: propTypes.string,
    information: propTypes.string,
    isActive: propTypes.bool,
    createdBy: propTypes.number,
    dateCreated: propTypes.string
  }),
  localClick: propTypes.func,
  location: propTypes.string,
  handleDelete: propTypes.func,
  localEdit: propTypes.func
};

export default ForumCard;
