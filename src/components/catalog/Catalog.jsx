import { useState,useEffect } from "react"

import getAllVitamins from '../../services/productService';

import Product from "../product/Product"
import "./catalog.css"

function Catalog() {
    const [vitamins, setVitamins] = useState([])

    useEffect(() => {
        getAllVitamins().then(data => {
         const vitaminData = data.docs.map(doc => ({
             id: doc.id,
             ...doc.data()
          }))
          console.log(vitaminData);
          setVitamins(vitaminData)
        }).catch(err => {
          console.log(err)
        })
      }, [])

    return (
    
        <div className="catalog">
            <div className="catalog__container">

                <div className="catalog__row">
                    {vitamins.slice(0,3).map(vitamin => (
                        <Product key={vitamin.id} {...vitamin}/>
                    ))}
                </div>
                <div className="catalog__row">
                {vitamins.slice(3,6).map(vitamin => (
                        <Product key={vitamin.id} {...vitamin}/>
                    ))}
                </div>
                
                <div className="catalog__row">
                {vitamins.slice(6,9).map(vitamin => (
                        <Product key={vitamin.id} {...vitamin}/>
                    ))}
                </div>

            </div>
        </div>
    
    )
}

export default Catalog