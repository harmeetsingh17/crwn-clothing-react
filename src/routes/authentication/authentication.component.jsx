import { useEffect } from "react"
import { getRedirectResult } from "firebase/auth"
import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase.util"

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import './authentication.styles.scss'

const Authentication = () => {

    // useEffect(() => {
    //     const getResult = async () => {
    //         const response = await getRedirectResult(auth)
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     getResult()
    // }, [])

    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    )
}
export default Authentication