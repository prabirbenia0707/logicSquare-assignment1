import React, { useState } from "react";
import './campus.css'
import placeData from "./placeData.js"

const Campus = () => {

    const [searchTerm, setSearchTerm] = useState("");


    return (
        <div className="main">
            
            <div className="inputSection">
                <div className="header">
                    <p> California Cafe Directory</p>
                </div>
                <input type="text"
                    placeholder="Search your favorite cafes!"
                    onChange={e => { setSearchTerm(e.target.value) }}
                />
            </div>

            <table>
                <tr>

                    <th>S No</th>
                    <th>Cafe Name</th>
                    <th>Address</th>
                    <th>Postal Code</th>
                    <th>Lat</th>
                    <th>Long</th>
                </tr>

                {placeData.filter((val) => {
                    if (searchTerm === "") {
                        return val
                    }
                    else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((val, id) => {
                    return (
                        // <div className="center">
                        //     <p> {val.name}</p>
                        // </div>
                        <tr>
                            <td>{val.sl}</td>
                            <td>{val.name}</td>
                            <td>{val.locality}</td>
                            <td>{val.postal_code}</td>
                            <td>{val.lat}</td>
                            <td>{val.long}</td>
                        </tr>
                    )
                })}

            </table>
        </div>

    );

}

export default Campus