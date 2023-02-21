import{Link} from "react-router-dom"

export const Item = ({item}) => {
    return (
    <div className="card mb-4 border-light estiloProducto">
        <img src={`../img/${item.imagen}`} className="card-img-top imagen" alt={`Imagen de ${item.nombre}`}/>
        <div className="card-body estiloCuerpo">
            <h5 className="card-title">{item.nombre} {item.modelo}</h5>
            <p className="card-text">{item.marca}</p>
            <p className="card-text">$ {new Intl.NumberFormat(`de-DE`).format(item.precio)}</p>
            <button className="btn btn-light"><Link className="nav-link" to={`/item/${item.id}`}>Ver Producto</Link></button>
        </div>
    </div>
    );
}


