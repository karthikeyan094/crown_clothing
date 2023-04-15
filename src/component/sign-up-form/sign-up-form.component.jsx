import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentWithAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.style.scss';
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("password do not match");
            return;
        }
        try {
            let { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentWithAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('can not create user,email already in use');
            } else
                console.log(error.message);
        }

    }
    console.log(formFields);
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span> Sign up with email and passoword</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type="text" required name="displayName" onChange={handleChange} value={displayName} />
                <FormInput label='Email' type="email" required name="email" onChange={handleChange} value={email} />
                <FormInput label='Password' type="password" required name="password" onChange={handleChange} value={password} />
                <FormInput label='Confirm Password' type="password" required name="confirmPassword" onChange={handleChange} value={confirmPassword} />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;