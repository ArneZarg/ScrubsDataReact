import React from "react";
import propTypes from "prop-types";
import "./SysAdmin.css";

const SysAdminProviders = props => {
  return (
    <>
      <div className="row">
        <div className="d-flex align-items-center col-6 pl-3 pr-0">
          <div className="mr-2">
            <h1 className="mb-0">
              <i className="fas fa-user-plus text-white" />
            </h1>
          </div>
          <div>
            <h6 className="font-20 text-white mb-1 op-7">Providers</h6>
            <h6 className="font-10 text-white font-medium mb-0">
              Select a state.
            </h6>
          </div>
        </div>
        <div className="col-6 pr-3 pl-0">
          <select
            value={props.stateId}
            name="stateId"
            className="custom-select sys-admin-select"
            onChange={props.stateChange}
          >
            <option value={0}>States</option>
            {props.stateOptions}
          </select>
        </div>
      </div>
      <div className="text-center text-white mt-4 row">
        <div className="col-4">
          <span className="font-14 d-block">Compliant</span>
          <span className="font-medium">{props.providers.compliant}</span>
        </div>
        <div className="col-5">
          <span className="font-14 d-block">Non-Compliant</span>
          <span className="font-medium">{props.providers.nonCompliant}</span>
        </div>
        <div className="col-3">
          <span className="font-14 d-block">Total</span>
          <span className="font-medium">{props.providers.totalCount}</span>
        </div>
      </div>
    </>
  );
};
SysAdminProviders.propTypes = {
  providers: propTypes.shape({
    compliant: propTypes.number,
    nonCompliant: propTypes.number,
    totalCount: propTypes.number
  }),
  stateOptions: propTypes.arrayOf(propTypes.element),
  stateId: propTypes.number,
  stateChange: propTypes.func
};
export default SysAdminProviders;
