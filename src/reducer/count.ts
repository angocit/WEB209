export const reducer = (state:number,action:{type:string,payload:{value:number}})=>{
    switch (action.type){
        case "tang":
            return state+action.payload.value
        case "giam":
            return state-action.payload.value
        default:
            return state
    }
}