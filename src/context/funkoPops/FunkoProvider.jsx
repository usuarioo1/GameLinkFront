import { FunkoContext } from "./FunkoContext";
import { useReducer } from "react"
import funkoReducer from "./FunkoReducer";
import axiosClient from "../../config/axiosClient";


export const FunkoProvider = ({ children }) => {

    const initialState = {
        products: [],
        product: [{
            id: "",
            nombre: "",
            valor: 0,
            descripcion: "",
            img: "",
            stock:""

        }]
    }

    const [funkoState, dispatch] = useReducer(funkoReducer, initialState)

    const getFunkos = async () => {

        const response = await axiosClient.get('/funkos')
        const funkos = response.data.info
        dispatch({
            type: "GET_FUNKOS",
            payload: funkos
        })
        return funkos
    }

    const getFunkoById = async (id) => {

        try {
            const response = await axiosClient.get(`/funkos/${id}`)
            const funkoInfo = response.data.product
            console.log(funkoInfo)

            dispatch({
                type: "GET_FUNKO",
                payload: funkoInfo
            })
        } catch (error) {
            console.error(error)
        }

    }
    return (
        <div>
            <FunkoContext.Provider value={{ getFunkos, getFunkoById, products: funkoState.products }}>{children}</FunkoContext.Provider>
        </div>
    )
}




