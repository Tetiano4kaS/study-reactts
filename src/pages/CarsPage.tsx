import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import CarsComponent from "../components/CarsComponent";
import {ICarPaginated} from "../models/ICarPaginated";

const CarsPage = () => {
    const [cars, setCars]=useState<ICarPaginated>();
    useEffect(()=>{
        carService.getCars().then((items) => setCars(items));
    },[])

    return (
        <div>
            <CarsComponent cars={cars}/>
        </div>
    );
};

export default CarsPage;