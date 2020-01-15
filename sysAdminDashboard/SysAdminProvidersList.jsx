import React from "react";
import PropTypes from "prop-types";

const SysAdminProvidersList = props => {
  return (
    <tr>
      <td>
        <span className="font-medium">
          {props.providerList.title ? props.providerList.title : " "}
        </span>
      </td>
      <td>
        <span className="font-medium">
          {props.providerList.firstName ? props.providerList.firstName : " "}{" "}
          {props.providerList.lastName ? props.providerList.lastName : " "}
        </span>
      </td>
      <td>{props.providerList.gender ? props.providerList.gender : " "}</td>
      <td>
        {props.providerList.email
          ? props.providerList.email.length >= 30
            ? props.providerList.email.slice(0, 30) + "..."
            : props.providerList.email
          : " "}
      </td>
    </tr>
  );
};
SysAdminProvidersList.propTypes = {
  providerList: PropTypes.shape({
    title: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
    email: PropTypes.string
  })
};
export default SysAdminProvidersList;
