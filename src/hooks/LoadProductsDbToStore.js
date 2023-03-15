import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { addProduct } from "../features/products/productsSlice";
import { db } from "./db";

export default function LoadProductsDbToStore() {
    const Dispatch = useDispatch();
    useEffect(() => {
        onSnapshot(collection(db, "products"), (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                Dispatch(addProduct(doc.data()));
            });
        });
    }, [])
    
}
