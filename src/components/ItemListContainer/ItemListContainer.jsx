//consulta los productos
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import {ItemList} from "../ItemList/ItemList"
export const ItemListContainer = () => {
  const [productos, setProductos] = useState ([])
  const {idCategoria}= useParams()

  useEffect(()=>{
    if(idCategoria){
      // para colocar el nombre de la categoria en lugar del id
      let aux;
                switch (idCategoria) {
                    case 'RopaDeportiva':
                        aux=1;
                      break;
                    case 'Calzados':
                        aux=2;
                    break;                        
                    case 'Accesorios':
                        aux=3;
                      break;
                    
                    default:
                        console.log('algo pasa');
                }
      
        fetch("../json/productos.json")
        .then(response => response.json())
        .then(items =>{
          const products = items.filter(prod => prod.idCategoria ===aux)                
          const productsList =  <ItemList products={products} plantilla={'item'}/>
          console.log(productsList)
          setProductos(productsList)
    })
  }else{
      fetch("./json/productos.json")
      .then(response => response.json())
      .then(products =>{
        const productsList = <ItemList products={products} plantilla={'item'}/>
          console.log(productsList)
          setProductos(productsList)
        

      })

    }



  },[idCategoria])
    return (
       
          <div className="row estiloProductos">
            
            {productos}
          
          </div>
       
    );
}
