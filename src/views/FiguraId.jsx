import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axiosClient from '../config/axiosClient';
import '../css/funkoId.css'

const FiguraId = () => {

    const { id } = useParams();
    console.log("ID de la figura:", id);
    const [funko, setFunko] = useState(null);

    useEffect(() => {
        const fetchFunkoDetails = async () => {
            try {
                const response = await axiosClient.get(`/funkos/${id}`);
                console.log(response)
                // Almacenar los detalles de la figura en el estado
                setFunko(response.data.funko);
            } catch (error) {
                console.error("Error fetching funko details:", error);
            }
        };

        fetchFunkoDetails();
    }, [id]);

    console.log(funko)

    return (
        <div>
            {funko ? (
                <>
                    <div className="customCard">
                        <h2 className="cardTitle">{funko.nombre}</h2>
                        <img className="cardImage" src={funko.img} alt={funko.nombre} />
                        <p className="cardDescription">{funko.descripcion}</p>
                        <p className="cardPrice">${funko.valor}</p>
                        {/* Mostrar otros detalles según sea necesario */}
                    </div>


                </>
            ) : (
                <p>Cargando detalles de la figura...</p>
            )}
        </div>
    )
}

export default FiguraId;