export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE after finished developing..
  // token:
  //   "BQACattO-Qc7w3X5BrC9gGLUxJbRSuFiCDzEyyyu2pf71lrPc9WFV51VSd6MOhD_LmD8lCnk4q0e3xEcCeEsf9v2dTEGCRhlH-oKQauHWGuuUosi0E-0RZjUFwEKYjVXCTzsJEeaoleYmWb_RkRgT1QyzSMlBQ",
};

const reducer = (state, action) => {
  console.log(action);

  // action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        // keep whats in the current state but update user
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
