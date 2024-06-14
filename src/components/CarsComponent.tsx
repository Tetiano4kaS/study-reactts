import React, {FC} from 'react';
import CarComponent from "./CarComponent";
import {ICarWithAuth} from "../models/ICarWithAuth";

interface IProps{
    cars:ICarWithAuth[] | undefined;
}
const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div>
            {cars?.map(item=><CarComponent key={item.id} car={item}/>)}
        </div>
    );
};

export default CarsComponent;