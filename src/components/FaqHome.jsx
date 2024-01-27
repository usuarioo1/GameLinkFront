import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import '../css/faqHome.css'

export const FaqHome = () => {
    return (
        <Container className='mt-5'>

            <Container>
                <h1 className='text-left'>Preguntas frecuentes</h1>
            </Container>

            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header >¿Cómo comprar en GameLink?</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>
                                <strong>Exploración y Selección:</strong> Explora el catálogo de Gamelink, selecciona tus juegos favoritos y agrégales al carrito de compras.
                            </li>
                            <li>
                                <strong>Registro y Pago Seguro:</strong> Regístrate o inicia sesión, elige opciones de pago seguras, y completa la transacción con total confianza.
                            </li>
                            <li>
                                <strong>Descarga y Soporte:</strong> Confirma tu compra, descarga los juegos de inmediato y cuenta con nuestro equipo de soporte para cualquier pregunta o asistencia que necesites. ¡Disfruta de tu experiencia de juego en Gamelink!
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Política de reembolso</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>
                                <strong>Solicitud de Reembolso:</strong>
                                <ul>
                                    <li>Se aceptan solicitudes dentro de los primeros 14 días.</li>
                                    <li>Producto sin uso o activación.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Proceso de Solicitud:</strong>
                                <ul>
                                    <li>Contacta al soporte con detalles y evidencia.</li>
                                    <li>Evaluación de elegibilidad por parte de nuestro equipo.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Reembolso:</strong>
                                <ul>
                                    <li>Procesado a través del mismo método de pago.</li>
                                </ul>
                            </li>
                        </ul>

                        <p>Estamos aquí para asegurar tu satisfacción en GameLink.</p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Suscripción a GameLink</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>
                                <strong>Suscripción a Newsletter GameLink:</strong>
                                <strong>Actualmente, lamentamos informarte que la suscripción a nuestro newsletter no está activa en este momento. Estamos trabajando para mejorar y pronto podrás disfrutar de las últimas noticias y ofertas exclusivas. ¡Mantente atento!</strong>
                            </li>
                        </ul>


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>¿Existe surcursal física?</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>
                                <strong>Lamentamos informar que por el momento no contamos con sucursal física, y solo realizamos envíos de las figuras a través de Starken y las KEYS de los juegos vía correo</strong>
                            </li>
                        </ul>


                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}
