const Locales = () => {
    return (
        <>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn-dark">Locales</button></a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Región Metropolitana</a></li>
            <li><a className="dropdown-item" href="#">Valparaiso</a></li>
            <li><a className="dropdown-item" href="#">Región de Coquimbo</a></li>
            <li><a className="dropdown-item" href="#">Región de Atacama</a></li>
          </ul>
        </li> 
        </>
        
    );
}

export default Locales;
