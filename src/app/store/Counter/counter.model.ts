export interface CounterState {
    count: number;
};

export enum Counter{
    Increment = 'Increment',
    Decrement = 'Decrement',
    Reset = 'Reset',
    Custom = 'Custom',
};

export enum CounterAction{
    Add = 'Add',
    Remove = 'Remove',
}