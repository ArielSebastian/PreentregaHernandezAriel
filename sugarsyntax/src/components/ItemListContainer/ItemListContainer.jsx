import React from 'react';
import './ItemListContainer.css'; // Importa el archivo CSS

function ItemListContainer() {
    const items = [
        { id: 1, nombre: 'Item 1' },
        { id: 2, nombre: 'Item 2' },
        { id: 3, nombre: 'Item 3' },
    ];

    return (
        <div className="item-list-container">
            <h2>Lista de elementos</h2>
            <ul className="item-list">
                {items.map((item) => (
                    <li key={item.id}>{item.nombre}</li>
                ))}
            </ul>
        </div>
    );
}

export default ItemListContainer;