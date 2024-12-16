import { useState } from "react";
import { useFetchHouse } from "../hooks/HouseHooks";
import { useParams } from "react-router-dom";
import ApiStatus from "../ApiStatus";
import defaultPhoto from "./DefaultPhoto";
import { currencyFormatter } from "../config";

const HouseDetails = () => {
    const {id} = useParams();
    if(!id) throw Error("House id not found!");
    const houseId = parseInt(id);

    const {data,status, isSuccess} = useFetchHouse(houseId);
    if(!isSuccess) return <ApiStatus status={status}/>
    if(!data) return <div>House not found.</div>

    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img className="img-fluid" src={data.photo ? data.photo : defaultPhoto} alt="House picture"></img>
                </div>
            </div>
            <div className="col-6">
                <div className="row mt-2">
                    <h5 className="col-12">{data.country}</h5>
                </div>
                <div className="row mt-2">
                    <h3 className="col-12">{data.address}</h3>
                </div>
                <div className="row mt-2">
                    <h2 className="themeFontColor col-12">
                        {currencyFormatter.format(data.price)}
                    </h2>
                </div>

            </div>        

        </div>

    );
};

export default HouseDetails;