import { collVitamins } from "../../firebase"; 
import { getDocs } from "firebase/firestore";

export default async function getAllVitamins() {
    const docs = await getDocs(collVitamins)

    return docs
}

