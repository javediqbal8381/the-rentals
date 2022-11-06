const initialdata={
    loading:false
}

export const alertsReducer=(state=initialdata,action)=>{

        switch(action.type)
        {
            case'LOADING':{
                return{
                    ...state,
                    loading:action.payload
                }
            }
            default:return state
        }



}