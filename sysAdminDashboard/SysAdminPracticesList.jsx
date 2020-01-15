import React from "react";
import propTypes from "prop-types";

const SysAdminPracticesList = props => {
  return (
    <tr>
      <td>
        <span className="font-medium">
          {props.practiceList.name
            ? props.practiceList.name.length >= 20
              ? props.practiceList.name.slice(0, 20) + "..."
              : props.practiceList.name
            : " "}
        </span>
      </td>
      <td>
        <span>
          {props.practiceList.email
            ? props.practiceList.email.length >= 30
              ? props.practiceList.email.slice(0, 30) + "..."
              : props.practiceList.email
            : " "}
        </span>
      </td>
      <td>{props.practiceList.state ? props.practiceList.state : " "}</td>
    </tr>
  );
};
SysAdminPracticesList.propTypes = {
  practiceList: propTypes.shape({
    name: propTypes.string,
    email: propTypes.string,
    state: propTypes.string
  })
};
export default SysAdminPracticesList;
