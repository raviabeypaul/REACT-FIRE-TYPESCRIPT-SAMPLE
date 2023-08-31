import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react"
import { auth } from "../config/FirebaseConfig";

export const AuthUser =()=>{
    const [authUser, setAuthUser ] = useState<User|null>(null);
    useEffect(()=>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })
    },[])
}