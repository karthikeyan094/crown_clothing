import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentWithAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in-form.style.scss';
const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                default:
                    console.log(error);
            }
        }
    }
    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span> Sign in with email and passoword</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" required name="email" onChange={handleChange} value={email} />
                <FormInput label='Password' type="password" required name="password" onChange={handleChange} value={password} />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm;