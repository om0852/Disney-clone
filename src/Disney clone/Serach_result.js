import React,{useState,useEffect} from 'react'

function Serach_result(props) {
    const [alldata ,setdata] = useState("");
 const [state ,setstate] = useState(false);
 useEffect(() => {
   const fetchdatafun = async () => {
    console.log("searchdata"+props.getdata)
     let url = `https://www.omdbapi.com/?apikey=aa43052b&s=${props.getdata}`;
     let fetchdata =await fetch(url);
     let data =await fetchdata.json();
     setdata(data.Search);
     console.log(alldata);
     setstate(true);
    //  console.log(data.Search.Title)
    // console.log("run")
    }
    fetchdatafun();
    fetchdatafun();
 },[props.getdata])
  return (
    <>
      <div className='serach-container'>
        <h2 className='search-text'>Showing all Search Result for {props.getdata}</h2>
        <div className='movie-list-container'>
      <div className='movie-list'>
      {state && alldata.map((data)=>{
      return <div key={data.imdbID} className='movie-center-list'><img src={data.Poster}/></div>
      })}
      </div>
    </div>
      </div>
    </>
  )
}

export default Serach_result
