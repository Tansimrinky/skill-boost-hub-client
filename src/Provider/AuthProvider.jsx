import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import PropTypes from 'prop-types';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic/useAxiosPublic";






export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
   const axiosPublic = useAxiosPublic()
   const [user, setUser ] = useState(null)
   const [loading, setLoading] = useState(true)
 
   const createUser = (email, password) => {
  
    return createUserWithEmailAndPassword(auth, email, password)
   }
   const signIn = (email, password) => {
     setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

   const googleSignIn = () => {
    return signInWithPopup(auth, provider)

   }

   useEffect( () =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        if(currentUser){
          const userInfo = { email: currentUser.email };
          axiosPublic.post('/jwt', userInfo)
              .then(res => {
                  if (res.data.token) {
                      localStorage.setItem('access-token', res.data.token);
                  }
              })
        }
        else{
          localStorage.removeItem('access-token');
        }
        setLoading(false)
    })
    return () => {
        unSubscribe()
    }
   } , [])
   

   const logOut = () =>{
    setLoading(true)
    return signOut(auth)
   }


   const authInfo = {
    user,
    loading, 
    createUser,
    logOut,
    signIn,
    googleSignIn

   }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
  children : PropTypes.node
}

export default AuthProvider;