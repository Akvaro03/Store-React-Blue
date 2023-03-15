import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./db";

export default function getProductsDb() {
    // const Dispatch = useDispatch();
    
    onSnapshot(collection(db, "products"), (querySnapshot) => {
        let data = []
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            data.push(doc.data());
        });
        return data;
    });

    // GetProductDb()

}

