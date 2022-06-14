import {loginError, loginStart, loginSuccess, registerError, registerStart, registerSuccess} from "./userRedux";
import {publicReq} from "../reqMethod";

export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try {
        const res = await publicReq.post("/auth/login",user)
        dispatch(loginSuccess(res.data));
    }catch (e) {
        dispatch(loginError());
    }
}
export const register = async (dispatch,user) => {
    dispatch(registerStart());
    try {
        const res = await publicReq.post("/auth/register",user)
        dispatch(registerSuccess(res.data));
    }catch (e) {
        dispatch(registerError());
    }
}