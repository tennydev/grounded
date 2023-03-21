import { useState } from "react";
import { signinAuthUserwithEmailandPassword } from "../utils/firebase/firebase.utils";
import { signInWithGooglePopup } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
      console.log(user);
      console.log(userDocRef);
      console.log("Googled");
    } catch (error) {
      console.log("Error");
    }
  };

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      const { user } = await signinAuthUserwithEmailandPassword(
        email,
        password
      );
      resetFormFields();
      console.log(user);
      console.log("Signed User in !");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Email or Password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email. Sign up ?");
          break;
        default:
          console.log("Error caught: \n" + error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account ?</h2>
      <span>Sign in with Email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          inputOptions={{
            required: true,
            type: "email",
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
        <FormInput
          label="password"
          inputOptions={{
            required: true,
            type: "password",
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            onClick={handleGoogleUser}
            type="button"
            buttonType={"google"}
          >
            Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
