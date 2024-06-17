// import auth from "@/Firebase/firebase.config";
// import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import useAxiosPublic from './../Hooks/useAxiosPublic';

// export const AuthContext = createContext(null);

// const AuthProvider = ({children}) => {

//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const axiosPublic = useAxiosPublic();
//     const googleProvider = new GoogleAuthProvider();
//     const githubProvider = new GithubAuthProvider();

//     //* Create User:
//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     //* Login User:
//     const loginUser = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     }

//     //* Google Login: 
//     const googleLogin = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     }

//     //* Github Login: 
//     const githubLogin = () => {
//         setLoading(true);
//         return signInWithPopup(auth, githubProvider);
//     }

//     //* Update Profile: 
//     const updateUser = (name, photo) => {
//         return updateProfile(auth.currentUser, {
//             displayName: name,
//             photoURL: photo
//         })
//     }

//     //* Logout User:
//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth);
//     }

//     //* Observer:
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             console.log('observer : ', currentUser);

//             if(currentUser) {
//                 const userEmail = { email: currentUser?.email };
//                 axiosPublic.post('/jwt', userEmail)
//                 .then(res => {
//                     if(res.data.token) {
//                         localStorage.setItem('access-token', res.data.token);
//                         setLoading(false);
//                     }
//                     else {
//                         localStorage.removeItem('access-token');
//                         setLoading(false);
//                     }
//                 })
//             }
//         })
//         return () => {
//             unsubscribe();
//         }
//     }, [axiosPublic]);

//     const authInfo = {
//         user,
//         setUser,
//         loading,
//         setLoading,
//         createUser,
//         loginUser,
//         googleLogin,
//         githubLogin,
//         updateUser,
//         logOut,
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;

import auth from "@/Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from './../Hooks/useAxiosPublic';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //* Create User:
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //* Login User:
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //* Google Login: 
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //* Github Login: 
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    //* Update Profile: 
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    //* Logout User:
    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            localStorage.removeItem('access-token');
            setLoading(true);
        } catch (error) {
            console.error('Error during logout:', error);
            setLoading(true);
        }
    }

    //* Observer:
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('observer : ', currentUser);

            if(currentUser) {
                const userEmail = { email: currentUser?.email };
                axiosPublic.post('/jwt', userEmail)
                .then(res => {
                    if(res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false);
                    }
                    else {
                        localStorage.removeItem('access-token');
                        setLoading(false);
                    }
                })
                .catch(() => {
                    localStorage.removeItem('access-token');
                    setLoading(false);
                });
            } else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        });
        return () => {
            unsubscribe();
        };
    }, [axiosPublic]);

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        updateUser,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;