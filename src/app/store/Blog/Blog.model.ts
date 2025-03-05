export interface BlogModel{
    id: number;
    title: string;
    description: string;
};

export interface Blogs{
    blogs: BlogModel[];
    loader: boolean;
    errorMsg: string;
}

export enum BlogActions {
    Load = '[Blog] Load Blogs',
    LoadSuccess = '[Blog] Load Blogs Success',
    LoadFailure = '[Blog] Load Blogs Failure',
    Add = '[Blog] Add Blogs',
    Update = '[Blog] Update Blogs',
    Delete = '[Blog] Delete Blogs'
}