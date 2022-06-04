const TopContainer = () => {

    const elemento = {
        id: 0,
        nombre: '',
        cantidad: 0
    } 


    useEffect(() => {

        const getTopJuegos = () => {
            return new Promise((resolve, reject) => {

                const db = getFirestore();
                const docCollection = collection(db, 'top');
                
                // const consulta = query(docCollection, where('id','==',parseInt(itemId)));
                const consulta = query(docCollection);
               
                getDocs(consulta).then(snapshot => {                    
                    if (snapshot.size > 0) {
                        const topData = snapshot.docs.map(d => ({ 'id': d.id, ...d.data() }));                           
                        resolve(topData);                        
                    }
                })            
            })
        };       

        getTopJuegos()
            .then((result) => {setTop(result); })
            .catch((err) => { console.log("Hubo un error. Falló la comunicación con Firebase"); })            
  
    }, []);

    

    return (
        <div>Top</div>
    )
}
export default TopContainer