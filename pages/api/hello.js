import db from "../../firebase/clientApp";
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const docRef = await addDoc(collection(db, "posts"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: " + e.message);
    }
    res.status(201).json({ message: "post added" });
  }

  if (req.method === "DELETE") {
    const id = req.body;

    try {
      const deleteRef = await deleteDoc(doc(db, "posts", id));
      console.log("Document deleted");
    } catch (e) {
      console.log("Error deleting the document: " + e.message);
    }
    res.status(201).json({ message: "post deleted" });
  }
}
