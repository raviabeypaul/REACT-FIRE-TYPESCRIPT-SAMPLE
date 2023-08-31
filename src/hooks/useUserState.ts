import { User, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react";
import { auth } from "../config/FirebaseConfig";

export const useUserState = ()=>{
    const [user, setUser]= useState<User|null>()

    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=>{
            console.log("onAuthStateChanged")
            if(user){
                console.log("user", user)
                setUser(user)
            }else{
                setUser(null);
            }
        })
        return ()=>{
            listen()   
        }
    },[])

    return {
        user : user,
        setUser : setUser
    }
}