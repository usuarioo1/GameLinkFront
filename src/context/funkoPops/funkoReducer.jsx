const funkoReducer = (state, action) =>{

    const {type, payload} = action;

    switch (type) {
        case "GET_FUNKOS":
            
            return {
                ...state,
                products: payload,
                product:[{
                    id:"",
                    nombre:"",
                    valor:0, 
                    descripcion:"",
                    img:""
                }]
                
            }
        case "GET_FUNKO":
            return {
                ...state,
                product:[payload]
            }
            default:
                return state;
    }


}

export default funkoReducer;