import React from "react";
import PropTypes from "prop-types";
// import logger from "sabio-debug";
// const _logger = logger.extend("SabioInit");

const SysAdminProfilesList = props => {

    return (
        <tr>
            <td>
                <span className="font-medium">
                    {props.sysAdminList.title ? props.sysAdminList.title : " "}
                </span>
            </td>
            <td>
                <span className="font-medium">
                    {props.sysAdminList.firstName ? props.sysAdminList.firstName : " "}{" "}
                    {props.sysAdminList.lastName ? props.sysAdminList.lastName : " "}
                </span>
            </td>
            <td>{props.sysAdminList.gender ? props.sysAdminList.gender : " "}</td>
            <td>
                {props.sysAdminList.email
                    ? props.sysAdminList.email.length >= 30
                        ? props.sysAdminList.email.slice(0, 30) + "..."
                        : props.sysAdminList.email
                    : " "}
            </td>
        </tr>
    );
};
SysAdminProfilesList.propTypes = {
    sysAdminList: PropTypes.shape({
        title: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        gender: PropTypes.string,
        email: PropTypes.string
    })
};
export default SysAdminProfilesList;
