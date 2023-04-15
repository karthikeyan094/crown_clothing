import { signInWithGooglePopUp, createUserDocumentWithAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentWithAuth(user);

    }
    return (
        <>
            <div>
                <h1> Sign In page</h1>
                <button onClick={logGoogleUser}>Sign in with google</button>
            </div>
            <SignUpForm />
        </>
    )
}
export default SignIn;