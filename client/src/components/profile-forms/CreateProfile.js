import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";

const CreateProfile = () => {
  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>

      <Link className="btn btn-light my-1" to="/dashboard">
        Go Back
      </Link>
    </Fragment>
  );
};

export default withRouter(CreateProfile);
