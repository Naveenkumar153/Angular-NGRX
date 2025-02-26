export interface BlogModel{
    id: number;
    title: string;
    description: string;
};

export interface Blogs{
    blogs: BlogModel[];
    // loading: boolean;
    // error: string;
}

export enum BlogActions {
    Load = '[Blog] Load Blogs',
    LoadSuccess = '[Blog] Load Blogs Success',
    LoadFailure = '[Blog] Load Blogs Failure',
    Add = '[Blog] Add Blogs',
}