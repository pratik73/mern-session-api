import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

const EditProfile = () => {
  return (
    <Fragment>
      <h1 className="large text-primary">Edit Your Profile</h1>
      <input type="submit" className="btn btn-primary my-1" />
      <Link className="btn btn-light my-1" to="/dashboard">
        Go Back
      </Link>
    </Fragment>
  );
};

export default withRouter(EditProfile);
