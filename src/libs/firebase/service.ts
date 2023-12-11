import { collection, getDocs, getFirestore } from "firebase/firestore"
import app from "./init"


const firestore = getFirestore(app);

export async function retriveData() {
    const snapshot = await getDocs(collection(firestore, "products"));
}