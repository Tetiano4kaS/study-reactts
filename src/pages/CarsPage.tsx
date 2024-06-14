import React, {useEffect, useState} from 'react';
import {authService, carService} from "../services/api.service";
import CarsComponent from "../components/CarsComponent";
import {ICarPaginated} from "../models/ICarPaginated";
import PaginationComponent from "../components/PaginationComponent";
import {useNavigate, useSearchParams} from "react-router-dom";
import {AxiosError} from "axios";

const CarsPage = () => {
    const navigate =useNavigate();
    const [query, setQuery] = useSearchParams()

    const [cars, setCars] = useState<ICarPaginated>({
        items: [],
        next: null,
        prev: null,
        total_items: 0,
        total_pages: 0
    });
    useEffect(() => {
        const getCarsData = async () => {
            try {
                const response= await carService.getCars(query.get('page') || '1');
                if (response){
                    setCars(response);
                }
            }catch (e){
                const axiosError = e as AxiosError;
                if (axiosError && axiosError?.response?.status===401) {
                    try {
                        await authService.refresh();
                    }catch (e){
                        return navigate('/')
                    }
                  const response= await carService.getCars(query.get('page') || '1');
                    if (response){
                        setCars(response);
                    }
                }

            }

        }
        getCarsData();
    }, [query]);


    return (
        <div>
            <CarsComponent cars={cars.items}/>
            <PaginationComponent next={cars.next} prev={cars.prev}/>
        </div>
    );
};

export default CarsPage;