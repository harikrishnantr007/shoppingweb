import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
import Productslice from "./Productslice";
import Searchslice from "./Searchslice";
const store=configureStore({
    reducer:{
            cart:Cartslice,
            product:Productslice,
            serach:Searchslice
    }
})
export default  store;