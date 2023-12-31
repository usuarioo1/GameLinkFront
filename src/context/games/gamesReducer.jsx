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
        case "GET_GAME":
            return{
                ...state,
                product:[payload]
            }
            
            
        default:
            return state;
    }
}

export default gameReducer;