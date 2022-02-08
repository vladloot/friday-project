import React, { FC } from "react";

import { useDispatch, useSelector } from "react-redux";

import { resetPasswordTC } from "pages/PasswordPages/PasswordRecovery/passwordRecovery-reducer";
import { RootState } from "store/store";

const PasswordRecovery: FC = () => {
  const isSent = useSelector<RootState, boolean>(
    (state) => state.resetPassword.isSent
  );

  let email = useSelector<RootState, string>(
    (state) => state.resetPassword.email
  );
  const errorMessage = useSelector<RootState, string | undefined>(
    (state) => state.resetPassword.error
  );

  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const submitInstruction = () => {
    dispatch(resetPasswordTC({ email, from: " ", message: "" }));
  };
  let valueEmail;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function myFunction() {
    // @ts-ignore
    // eslint-disable-next-line no-alert
    email = document.getElementById("email").value;
    valueEmail = email;
    console.log(email);
  }

  return (
    <div>
      {!isSent ? (
        <>
          <h2>Forgot your password?</h2>
          <form>
            <div>
              <span />
              <input
                id="email"
                type="text"
                placeholder="Email"
                value={valueEmail}
                onChange={myFunction}
              />

              {errorMessage ? <div>{errorMessage}</div> : null}
            </div>
            <p>
              Enter your email address and we will send you further instructions
            </p>

            <button disabled={false} type="submit" onClick={submitInstruction}>
              Send Instructions
            </button>
          </form>
        </>
      ) : (
        <>
          <h2>Check Email</h2>
          <p>
            We’ve sent an Email with instructions to <br />
            {email}
          </p>
        </>
      )}
    </div>
  );
};

export default PasswordRecovery;
