import {useEffect,useState} from 'react' 
import axios from 'axios'


const KEY_APP = process.env.REACT_APP_GIF_KEY


const Tag = () => { 

    const [tag,SetTag] = useState('cats')  
    const[gif,setGif] = useState('')  


  const handelTag = (e) => SetTag(e.target.value)
 


 const gifData = async (tag) => {

     const url = `https://api.giphy.com/v1/gifs/random?api_key=${KEY_APP}&tag=${tag}`

     const req = await  axios.get(url)  

     // console.log(req.data.data.images.downsized_large.url)  

     const gifResponse = req.data.data.images.downsized_large.url 
     
     setGif(gifResponse)  
 }  


 useEffect(() => {
 
     gifData(tag); 

 }, [tag]) 


 const handelGif = () =>  gifData(tag);   



 
 




    return (
        <div className='container'>   

        <h1> Random {tag} Gif  </h1>  

        <img src={gif} width='450px' height='450px' alt="Random Gif" /> 

        <input type="text" value={tag}  onChange={handelTag} />  

        <button onClick={handelGif} > change </button> 

        </div>
    )
}

export default Tag ;
