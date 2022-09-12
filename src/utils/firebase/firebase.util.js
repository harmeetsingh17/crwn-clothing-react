import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7mXtHhHNC3Sn8CRU0LB6PZM6UCfasZIY",
    authDomain: "crwn-clothing-db-b1ac2.firebaseapp.com",
    projectId: "crwn-clothing-db-b1ac2",
    storageBucket: "crwn-clothing-db-b1ac2.appspot.com",
    messagingSenderId: "476099485229",
    appId: "1:476099485229:web:73790e031ef8f81f7e62a4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
        } catch (error) {
            console.log('error creating user', error);
        }
    }
    return userDocRef
}

export const createAuthUserWithEmailPasssword = async (email, password) => {

    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthUserWithEmailPasssword = async (email, password) => {

    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)

}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)