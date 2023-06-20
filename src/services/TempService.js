
import { 
    collection,  
    query,
    where,
    getDocs, 
    orderBy,
    limit,
    increment,
    doc,
    updateDoc
 } from "firebase/firestore";
 import {db} from "../firebase"

export const getColletBy = async (search) => {
    
    const post = [];
    const postRef = collection(db, "entries");
    const q = query(postRef, where("taggs", "array-contains", search));
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            post.push(doc.data());
        });
        return post; 
    } catch (error) {
       console.log(error + "desde obtener"); 
    }
}

export const getCollet = async () => {
    const post = [];
    const q = query(collection(db, "entries"), orderBy("date", "desc"),limit(20));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        post.push({...doc.data(), id: doc.id});
    });
    return post;
}

export const  updateViews = async (id) => {
    try {
      const postRef = doc(db, "entries", id);
      await updateDoc(postRef, {
          views: increment(1)
      })
    } catch (error) {
      console.log('error desde views', error);
    }
  }

export const getCurrentPost = async (id) => {
    const post = [];
    try {
        const q = query(collection(db, "entries"))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            post.push({...doc.data(), id: doc.id});
        })
        return post.filter((field => field.id === id));
        
    } catch (error) {
        
    }
}
