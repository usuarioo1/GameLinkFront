const userReducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case "LOGIN/REGISTER":

            localStorage.setItem('token', payload)
            return {
                ...state,
                authStatus: true
            }
        case "INFO_USER":
            return {
                infoUser: payload,
                authStatus: true
            }
        case "SIGN_OUT":
            localStorage.removeItem('token')

            return{
                ...state,
                infoUser: [],
                authStatus: false
            }

        default:
            return state;
    }
}

export default userReducer;