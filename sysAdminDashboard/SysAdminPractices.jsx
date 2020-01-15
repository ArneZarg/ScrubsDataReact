import React from "react";
// import propTypes from "prop-types";

const SysAdminPractices = () => {
  return (
    <>
      <div className="col-3">
        <span className="font-14 d-block">State</span>
        <span className="font-medium">CA</span>
      </div>
      <div className="col-4">
        <span className="font-14 d-block">Compliant</span>
        <span className="font-medium">29</span>
      </div>
      <div className="col-5">
        <span className="font-14 d-block">Non-Compliant</span>
        <span className="font-medium">6</span>
      </div>
    </>
  );
};
// SysAdminPractices.propTypes = {
//   exampleList: propTypes.shape({
//     example: propTypes.string,
//   })
// };
export default SysAdminPractices;
