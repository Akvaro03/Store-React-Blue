import { collection, getDocs } from "firebase/firestore";
import { db } from "./db";

async function  fetchData() {
    let data = [];
    let fetchDataFirebase = async () => {
        console.log("Entro a la funcion")
        const colecctionProducts = collection(db, "products")
        const querySnapshot = await getDocs(colecctionProducts);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // Dispatch(addProduct(doc.data()));
            data.push(doc.data())
        });
    }
    await fetchDataFirebase()

    return data;
}

export default fetchData;