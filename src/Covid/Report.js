import React ,{useEffect}from 'react'

function Report() {
    const CovidDataFetch = async()=>{
        const res = await fetch('https://api.covidtracking.com');
        const CovidData = await res.json();
        console.log(CovidData)
    }
    useEffect(() => {
      
        CovidDataFetch();
    

    }, [])
    
  return (
    <div>
      <h1>Covid Reports</h1>
    </div>
  )
}

export default Report
