// enum AppActionsEnum {}

type AppState = {};
type AppActions = any;

const initialState: AppState = {};

export const appReducer = (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    default:
      return state;
  }
};
