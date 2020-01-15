import React from "react";
import PropTypes from "prop-types";

import "./forum.css";

const ReplyCard = props => {
  const deleteCard = () => {
    props.onDelete(props.reply.id);
  };
  const toggleForm = () => {
    document
      .getElementById(`replyContent-${props.reply.id}`)
      .classList.toggle("remove");
    document
      .getElementById(`editReplyForm-${props.reply.id}`)
      .classList.toggle("remove");
  };
  const prepareToEdit = () => {
    toggleForm();
    document.getElementById(`replyInputTag-${props.reply.id}`).value =
      props.reply.content;
  };
  const editThisPost = () => {
    let replyContent = document.getElementById(
      `replyInputTag-${props.reply.id}`
    ).value;
    let updatedReply = {
      id: props.reply.id,
      content: replyContent
    };
    props.onEdit(updatedReply);
    toggleForm();
  };
  return (
    <React.Fragment>
      <div className="col-2"></div>
      <div className="col-10">
        <hr />
        <div>
          <div style={{ width: "85%" }}>
            <div className="media mt-3">
              <img
                src={props.reply.avatarUrl}
                width={70}
                height={70}
                alt="avatar"
                className="shadow d-flex mr-3"
              />
              <span id={`replyContent-${props.reply.id}`}>
                <div className="media-body mb-3">{props.reply.content}</div>
                <button
                  className="btn btn-success mr-3"
                  onClick={prepareToEdit}
                >
                  Edit
                </button>
                <button className="btn btn-secondary" onClick={deleteCard}>
                  Delete
                </button>
              </span>
              <span className="remove" id={`editReplyForm-${props.reply.id}`}>
                <input
                  className="form-control mb-3"
                  id={`replyInputTag-${props.reply.id}`}
                ></input>
                <button className="btn btn-secondary mr-3" onClick={toggleForm}>
                  Discard
                </button>
                <button className="btn btn-primary" onClick={editThisPost}>
                  Submit
                </button>
              </span>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReplyCard;

ReplyCard.propTypes = {
  reply: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    createdBy: PropTypes.number,
    avatarUrl: PropTypes.string
  }),
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  localClick: PropTypes.func
};
