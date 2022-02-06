// enum AuthActionsEnum {}

type AuthState = {};
type AuthActions = any;

const initialState: AuthState = {};

export const authReducer = (
  state = initialState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    default:
      return state;
  }
};
