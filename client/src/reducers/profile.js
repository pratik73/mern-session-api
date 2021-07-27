import {
  CLEAR_PROFIlE,
  GET_PROFILE,
  UPDATE_PROFIlE,
  PROFILE_ERROR,
  GET_PROFILES,
  GET_REPOS,
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // TODO - Setup all profile cases here
    default:
      return state;
  }
}
