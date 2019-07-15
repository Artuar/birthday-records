export interface Birthday {
    name: string;
    birth: string;
}

export enum SortType {
    Name = 'name',
    Age = 'age'
}

export interface RadioModel {
    sortBy: SortType;
}
