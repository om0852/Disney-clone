import React, { useState ,useEffect} from 'react'

function Triller() {
 const [alldata ,setdata] = useState("");
 const [state ,setstate] = useState(false);
 
 let num;
 useEffect(() => {
   const fetchdatafun = async () => {
     let url = "https://www.omdbapi.com/?apikey=aa43052b&s=naruto";
     let fetchdata =await fetch(url);
     let data =await fetchdata.json();
     setdata(data.Search);
     console.log(alldata);
     setstate(true);
   }
    fetchdatafun();
    fetchdatafun();
 },[])

  return (
    <>
    <div className='movie-list-container'>
    <h2>Naruto</h2>
    <div className='movie-list'>
      {state && alldata.map((data)=>{
      return <div key={data.Poster} className='movie-center-list'><img src={data.Poster}/></div>
      })}
      </div>
    </div>
    </>
  )
}

export default Triller
