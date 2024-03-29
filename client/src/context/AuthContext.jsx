import { createContext, useEffect, useReducer } from "react"

const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem('user')),
    loading:false,
    error:null
}

export const AuthContext = createContext(INITIAL_STATE)

const AuthReducer = (state , action)=>{
    switch(action.type){
        case "LOGIN_START":
            return { 
                user:null,
                loading:true,
                error:null
            }
        case "LOGIN_SUCCESS":
            return action.payload
        case "LOGIN_FAILED":
            return { 
                user:null,
                loading:false,
                error:action.payload
            }
        case "LOGOUT":
            return { 
                user:null,
                loading:false,
                error:null
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({children})=>{
    const [state , dispatch] = useReducer(AuthReducer,INITIAL_STATE);
    console.log(state)
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.username));
    })
    return(
        <AuthContext.Provider 
        value={{
            user:state.username , 
            loading:state.loading , 
            error:state.error,
            dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}