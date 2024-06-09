import React, {FC} from 'react';
import {ICarWithAuth} from "../models/ICarWithAuth";

interface IProps {
    car: ICarWithAuth
}

const CarComponent: FC<IProps> = ({car}) => {
    return (
        <div>
            {car.id} --
            brand:{car.brand},
            year:{car.year},
            price:{car.price}
        </div>
    );
};

export default CarComponent;