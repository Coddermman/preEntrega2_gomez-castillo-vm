const Buscador = () => {
    return (
        <>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button type="submit" className="btn btn-primary btn-sm">Search</button>
        </form>   
        </>
    );
}

export default Buscador;
