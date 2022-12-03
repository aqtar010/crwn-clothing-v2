import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import { useState, useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../context/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser}=useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.accessToken);
        setCurrentUser(user)
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/wrong-password":
            alert("Incorrect Password for Email");
            break;
          case "auth/user-not-found":
            alert("No use associated with this Email");
            break;
          default:
            console.log(error);
            break;
        }
      });
    resetFormFields();
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an Account?</h2>
      <span>Sign In With Email and Password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit" onClick={handelSubmit}>
            Sign In
          </Button>
          <Button type="button" buttonType={"google"} onClick={SignInWithGoogle}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
