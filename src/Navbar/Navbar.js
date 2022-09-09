import React from "react";
import logo from '../resources/carrito.png'
import CartWidget from "../Components/CartWidget";


const Navbar = ({ nombre, apellido, id, children }) => {}

    const categorias = [
        { id: 0, nombre: 'Categoria 1'},
        { id: 1, nombre: 'Categoria 2'},
        { id: 2, nombre: 'Categoria 3'},
        { id: 3, nombre: 'Categoria 4'},
    ]

    return (
        <>
        <img src="" alt="logo"/>
        <h1>¡Bienvenidos!</h1>
        <nav>
            <a href="">Categoría 1</a>
            <a href="">Categoría 2</a>
            <a href="">Categoría 3</a>
        </nav>
        <img src="resources/carrito.png" alt="carrito"/>
        </>
    ) 


    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    }

    export default Navbar