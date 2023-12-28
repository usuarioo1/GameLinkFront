const gameReducer = (state,action) => {

    const {type, payload} = action;

    switch (type) {
        case "GET_GAMES":
            return {
                ...state,
                products: payload,
                product: [{
                    id:"",
                    nombre:0,
                    precio:"",
                    img:"",
                    descripcion:"",
                    stock:"",
        
                }]
            }
            
        default:
            return state;
    }
}

export default gameReducer;