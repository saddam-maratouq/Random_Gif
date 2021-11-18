import {useEffect,useState} from 'react' 
import axios from 'axios'


const KEY_APP = process.env.REACT_APP_GIF_KEY

const Random = () => { 

    const[gif,setGif] = useState('')  


    const gifData = async () => {

        const url = `https://api.giphy.com/v1/gifs/random?api_key=${KEY_APP}`

        const req = await  axios.get(url)  

        // console.log(req.data.data.images.downsized_large.url)  

        const gifResponse = req.data.data.images.downsized_large.url 
        
        setGif(gifResponse)  
    }  


    useEffect(() => {
    
        gifData(); 

    }, []) 


    const handelGif = () => {

        gifData(); 
    } 







    return (
     <div className='container'>

         <h1> Random  Gif  </h1> 

         <img src={gif}width='450px' height='450px' alt="Random Gif" /> 

         <button onClick={handelGif} >  click here  </button>
        
     </div>
    )
}

export default Random
