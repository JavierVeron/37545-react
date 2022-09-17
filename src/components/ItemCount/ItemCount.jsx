import React, { useEffect, useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    const [counter, setCounter] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);

    const decrementarCantidad = (valor) => {
        if (valor > 0) {
            setCounter(valor);
        }
    }

    const incrementarCantidad = (valor) => {
        if (valor <= itemStock) {
            setCounter(valor);
        }
    }

    const agregarProductos = () => {
        if (counter <= itemStock) {
            onAdd(counter); //Acá utilizo la función que estoy pasando vía Props, solamente le paso la cantidad de Items de Productos que voy a agregar
            setItemStock(itemStock - counter);
            setCounter(itemStock - counter); //Tuve que agregar esta función porque actualizaba el Stock pero no esta mostrando en pantalla cuando Items de Productos había disponible
        }   
    }

    useEffect(() => { //EL CAMBIO MÁS IMPORTANTE. El stock vía props si está llegando. Pero como esta usando una promesa con una retardo de 2 segundos, el valor cuando se ejecuta todavía no lo tenía. Después de los 2 segundos ahí si obtiene el valor del stock. Como estaba armado anteriormente, cargaba el componente con el valor inicial del stock (que era undefined) y no lo volvía a actualizar. Solución. Utilizar un useEffect para que esté leyendo todo el tiempo el props "stock".
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <p><input type="button" className="btn fondo_naranja rounded-circle" value="-" onClick={() => {decrementarCantidad(counter - 1)}} /> {counter} <input type="button" className="btn fondo_naranja rounded-circle" value="+" onClick={() => {incrementarCantidad(counter + 1)}} /></p>
                <p><input type="button" className="btn fondo_naranja" value="Agregar" onClick={() => {agregarProductos()}} /></p>
            </div>        
        </div>
    )
};

export default ItemCount;