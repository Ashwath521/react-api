import TextInput from "../../shared/Input/TextInput";
import SubmitButton from "../../shared/Buttons/SubmitButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

export default function SignUp() {
  const [firstUserName, setFirstUserName] = useState(" ");
  const [lastUserName, setLastUserName] = useState(" ");
  const [userEmail, setUserEmail] = useState(" ");
  const [userPassword, setUserPassword] = useState(" ");

  const { handleSubmit } = useSignUp(
    firstUserName,
    lastUserName,
    userEmail,
    userPassword
  );

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="shadow-lg shadow-cyan-500/50 pr-8 pl-8 p-2 rounded-md"
        onSubmit={handleSubmit}
      >
        <TextInput
          type="text"
          id="username"
          label="First Name"
          value={firstUserName}
          onChange={(e) => setFirstUserName(e.target.value)}
          name="firstName"
        />
        <TextInput
          type="text"
          id="username"
          label="Last Name"
          value={lastUserName}
          onChange={(e) => setLastUserName(e.target.value)}
          name="lastName"
        />
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
        <SubmitButton label="Sign up" type="submit" />
        <h1 className="flex justify-center items-center">
          Already have an account?
          <Link className="ml-1 text-green-500" to="/">
            Sign in
          </Link>
        </h1>
      </form>
    </div>
  );
}
