import { useEffect } from "react"
import { doc, getDoc, getFirestore }  from "firebase/firestore";

const PruebaFirebase = () => {

useEffect(() => {
    // Query - Consulta a Firebase - FireStorm
    getItemBase();
}, [])


const getItemBase = () => { 
    const db = getFirestore();
    const miDoctumento = doc(db, 'juegos', 'fbNqqG5kcR0JQCCH94iC');

    getDoc(miDoctumento).then( snapshot => {
        if(snapshot.exists()){
            console.log(snapshot);
        }
    })
 }

  return (
    <div>PruebaFirebase</div>
  )
}
export default PruebaFirebase