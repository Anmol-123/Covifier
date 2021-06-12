import React, { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mystyle.css'

const Covid = () => {
    const [data, setData] = useState([]);
    const covidData = async () => {
        const response = await fetch('https://api.covid19india.org/data.json');
        const actualData = await response.json();
        setData(actualData.statewise);
    }
    useEffect(() => {
        covidData();
    }, [])

    return (
        <>

            <h3>{data.map((nv) => {
                return (
                    <>
                        <div className=" upper bg-muted text-light">
                            <h5>{nv.state}  ({nv.statecode})</h5>
                            <h5>{nv.active}</h5>
                            <h5>{nv.confirmed}</h5>
                            <h5>{nv.recovered}</h5>
                            <h5>{nv.deaths}</h5>
                            <h5>{nv.lastupdatedtime}</h5>

                        </div>


                    </>)
            })}</h3>
        </>
    )
}

export default Covid;
