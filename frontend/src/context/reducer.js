export const actionType = {
  SET_USER: "SET_USER",
  SET_ALL_USERS: "SET_ALL_USERS",
  SET_ALL_MOVIES: "SET_ALL_MOVIES",
  SET_MOVIE: "SET_MOVIE",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return { ...state, user: action.user };

    case actionType.SET_ALL_USERS:
      return { ...state, allUsers: action.allUsers };

    case actionType.SET_ALL_MOVIES:
      return { ...state, allMovies: action.allMovies };

    case actionType.SET_MOVIE:
      return { ...state, movie: action.movie };

    default:
      return state;
  }
};

export default reducer;
