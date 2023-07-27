import TextInput from "../../shared/Input/TextInput";
import SubmitButton from "../../shared/Buttons/SubmitButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import useSignIn from "../../hooks/useSignIn";
import useGetUserData from "../../hooks/useGetUserData";

export default function SignIn() {
  const [userEmail, setUserEmail] = useState(" ");
  const [userPassword, setUserPassword] = useState(" ");
  const { userData } = useGetUserData();
  const { handleSubmit } = useSignIn(userData, userEmail);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="shadow-lg shadow-cyan-500/50 pr-8 pl-8 p-2 rounded-md"
        onSubmit={handleSubmit}
      >
        <TextInput
          type="email"
          id="username"
          label="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          name="userEmail"
        />
        <TextInput
          type="password"
          id="pwd"
          label="Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          name="pwd"
        />
        <SubmitButton label="Sign In" type="submit" />
        <h1 className="flex justify-center items-center">
          Don't have an account?
          <Link className="ml-1 text-green-500" to="/signup">
            Sign up
          </Link>
        </h1>
      </form>
    </div>
  );
}
