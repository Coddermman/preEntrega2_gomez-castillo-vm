const CartWidget = ({cantCarrito}) => {
    return (
        <>
         <i className="fa-solid fa-cart-arrow-down btn btn-dark" />
         <p class="text-light ">{cantCarrito}</p>
        </>
    );
}

export default CartWidget;
