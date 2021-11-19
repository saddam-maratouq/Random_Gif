
import useGif from '../hook/useGif'



const Random = () => { 

    const{gif,gifData} = useGif()   


 const handelGif = () =>   gifData(); 


    return (
     <div className='container'>

         <h1> Random  Gif  </h1> 

         <img src={gif}width='450px' height='450px' alt="Random Gif" /> 

         <button onClick={handelGif} >  click here  </button>
        
     </div>
    )
}

export default Random
