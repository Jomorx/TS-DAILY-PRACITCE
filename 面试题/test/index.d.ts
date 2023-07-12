declare global {
    interface Promise{
        myAll(arr):Promise<Array<any>>
    }
}
export {}