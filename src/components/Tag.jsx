import {useState} from 'react' 
import useGif from '../hook/useGif'




const Tag = () => { 

    const [tag,SetTag] = useState('')  
    
    const {gif,gifData} = useGif(tag)   


    // functions 

 const handelTag = (e) => SetTag(e.target.value) 

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
