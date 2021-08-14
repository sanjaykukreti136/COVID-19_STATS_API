import React, { useEffect, useState } from 'react';
import './Statewise.css'
const Statewise = () => {

    const [data, setdata] = useState([]);

    const getData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actual = await res.json();
        console.log(actual.statewise);
        setdata(actual.statewise)
    }

    useEffect(() => {
        getData();
    }, []

    );

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center" ><span className="font-weight-bold" >INDIA</span>COVID - 19 DASHBOARD</h1>
                </div>
                <div className="table-responsive" >
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>STATE</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((currele, idx) => {
                                    return <tr key={idx} >
                                        <th>{currele.state}</th>
                                        <th>{ currele.confirmed}</th>
                                        <th>{ currele.recovered}</th>
                                        <th>{ currele.deaths}</th>
                                        <th>{ currele.active}</th>
                                        <th>{ currele.lastupdatedtime}</th>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

}
export default Statewise;