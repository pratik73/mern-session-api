import axios from "axios";
import { setAlert } from "./alert";

// TODO - import required actions here
import {
  UPDATE_PROFIlE,
  PROFILE_ERROR,
  ACCOUNT_DELETED,
  CLEAR_PROFIlE,
} from "./types";

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    // TODO - get current user profile from server
    // TODO - Save it to store
  } catch (err) {
    // TODO - Clear profile if getting profile fails
    // TODO - setup an alert when getting profile failed
  }
};

// Get all profiles
export const getProfiles = () => async (dispatch) => {
  // TODO - Clear profile before getting all profiles

  try {
    // TODO - get all profiles
    // TODO - Save it to store
  } catch (err) {
    // TODO - display an error if something goes wrong
  }
};

// Get profile by ID
export const getProfileById = (userId) => async (dispatch) => {
  try {
    // TODO - get profile by userId
    // TODO - Save it to store
  } catch (err) {
    // TODO - display an error when something goes wrong
  }
};

// Get github repos
export const getGithubRepos = (username) => async (dispatch) => {
  try {
    // TODO - get github repos by github username
    // TODO - Save it to store
  } catch (err) {
    // TODO - display an error when something goes wrong
  }
};

// Create or update profile
export const createProfile =
  (formData, history, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // TODO - post to server with profile data to create a profile

      // TODO - Save it to store

      // TODO - display an alert

      if (!edit) {
        history.push("/dashboard");
      }
    } catch (err) {
      const errors = err.response.data.errors;

      // TODO - display an alert for each error messages

      // TODO - display an error when something goes wrong
    }
  };

// Add Experience
export const addExperience = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const res = await axios.put("/api/profile/experience", formData, config);

    dispatch({
      type: UPDATE_PROFIlE,
      payload: res.data,
    });

    dispatch(setAlert("Experience Added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Education
export const addEducation = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const res = await axios.put("/api/profile/education", formData, config);

    dispatch({
      type: UPDATE_PROFIlE,
      payload: res.data,
    });

    dispatch(setAlert("Education Added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete experience
export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);

    dispatch({
      type: UPDATE_PROFIlE,
      payload: res.data,
    });

    dispatch(setAlert("Experience Removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete education
export const deleteEducation = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`);

    dispatch({
      type: UPDATE_PROFIlE,
      payload: res.data,
    });

    dispatch(setAlert("Education Removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete account & profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      await axios.delete("/api/profile");

      dispatch({
        type: CLEAR_PROFIlE,
      });

      dispatch({
        type: ACCOUNT_DELETED,
      });

      dispatch(setAlert("Your account has been permanently deleted"));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
