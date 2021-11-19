import {useEffect,useState} from 'react' 
import axios from 'axios' 






const KEY_APP = process.env.REACT_APP_GIF_KEY

const url = `https://api.giphy.com/v1/gifs/random?api_key=${KEY_APP}`

const useGif = (tag) => {
   

 const[gif,setGif] = useState('')   



 const gifData = async (tag) => {


     const req = await  axios.get( tag ? `${url}&tag=${tag}` : url )  

     // console.log(req.data.data.images.downsized_large.url)  

     const gifResponse = req.data.data.images.downsized_large.url 
     
     setGif(gifResponse)  
 }  


 useEffect(() => {
 
     gifData(tag); 

 }, [tag]) 




  return { gif, gifData }

}

export default useGif
