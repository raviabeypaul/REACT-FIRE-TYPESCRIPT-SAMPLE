import { ElementProps } from "../interfaces/ElementProps";
import { useUserState } from "../hooks/useUserState";
import { useNavigate } from "react-router-dom";
import { useEffect, } from "react";
export const ProtectedRoutes: React.FC<ElementProps> = (props: ElementProps) => {
    const navigate = useNavigate()
    const user = useUserState();
    useEffect(()=>{
        if(!user){
            navigate("/", {replace:true})
        }
    },[user, navigate])
    return <div>{props.children}</div>
}
