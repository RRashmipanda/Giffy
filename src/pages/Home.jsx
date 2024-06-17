import { GifState } from "../context/Gif-context"
import { useEffect } from "react";
import Gif from "../components/Gif";
import FilterGif from '../components/FilterGif' 

const Home = () => {

  const {gfy,gifs,setGifs,filter }=GifState();

  const fetchTrendingGIFs= async()=>{
    const {data}= await gfy.trending({
      limit:20,
      type:filter,
      rating:"g",
    });

    setGifs(data);
  };
  
  useEffect(() => {
    fetchTrendingGIFs();
  }, [filter]);
  // whenever filter change useeffect call again


  return (
  <div>
   <img
    src="/banner.gif"
    alt="earth banner"
    className="mt-2 rounded w-full"
    />
 <FilterGif showTrending />


    <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
      {gifs.map((data) =>{
       return  <Gif  gif= {data} key={data?.title}/>
      })}
      
    </div>  
  </div>
  )
}

export default Home
