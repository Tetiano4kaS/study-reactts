import {ICarWithAuth} from "./ICarWithAuth";
import {IPaginatedPageModel} from "./IPaginatedPageModel";

export interface ICarPaginated{
    total_items: number,
    total_pages: number,
    prev: IPaginatedPageModel | null,
    next:IPaginatedPageModel | null,
    items:ICarWithAuth[]
}