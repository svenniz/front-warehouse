import { useState } from "react";
import { House } from "../types/house";
import config from "../config";
import useFetchHouses from "../hooks/HouseHooks";

const HouseList = () => {
    const {data} = useFetchHouses();

    return (
        <div>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses CUrrently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>

                    </tr>
                </thead>
                <tbody>
                    {data && data.map((h: House) => (
                        <tr key={h.id}>
                            <td>{h.address}</td>
                            <td>{h.country}</td>
                            <td>{h.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HouseList;