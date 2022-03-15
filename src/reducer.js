export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDubJ4-QvmaS6i-p5TPgg16lMi3WK9YX5b0UJ92tBtR0WzrhNekve7oEQa4CqcVHKgweMrClqMwNjz9BsJMJxZtAMEEW5E6PvjCF-VmjEmGVhlwc2VXJ1iI33Yn_xdCU6pIfnlhyXZWQAUn56zPYF9gm4v-9P4GcEXLGD7R2ZjZjB7bH4-o",
};

const reducer = (state, action) => {
  console.log(action);
  //action=>type,[payload]
  switch (action.type) {
    case "SET_USER":
      return {
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
