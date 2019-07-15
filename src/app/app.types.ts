export interface Birthday {
    name: string;
    birth: string;
}

export type SortType = 'name' | 'age' | '';

export interface RadioModel {
    sortBy: SortType;
}
