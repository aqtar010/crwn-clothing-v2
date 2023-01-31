import { createContext, useState } from "react";
import PRODUCTS from '../shop-data.json'

export const ProductContext =createContext({
    products:[],
});

export const ProductProvider = ({children})=>{
    // eslint-disable-next-line no-unused-vars
    const [products,setProducts] =useState(PRODUCTS)
    const value ={products}
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    );
};