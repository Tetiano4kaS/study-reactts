import React, {FC} from 'react';
import {ICarPaginated} from "../models/ICarPaginated";
import CarComponent from "./CarComponent";

interface IProps{
    cars:ICarPaginated | undefined;
}
const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div>
            {cars?.items.map(item=><CarComponent key={item.id} car={item}/>)}
        </div>
    );
};

export default CarsComponent;