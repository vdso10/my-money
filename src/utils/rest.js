import { useReducer, useEffect } from 'react'
import axios from 'axios'


const INITIAL_STATE = {
    loading: true,
    data: {}
}

const reducer = (state, action) =>{
    console.log('state', state, 'action', action)
    if(action.type ==='REQUEST'){
      return{
        ...state,
        loading: false
      }
    }
  
    if(action.type === 'SUCCESS'){
      return{
        ...state,
        loading: false,
        data: action.data
      }
    }
  
    //manipular meu estado
    return state
}

const init = baseUrl => {
    const useGet = resource =>{
  
        const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
      
        useEffect(() => {
          dispatch({ type: 'REQUEST'})
          axios
            .get(baseUrl + resource + '.json')
            .then(res => {
              dispatch({ type: 'SUCCESS', data: res.data})
              
            })
        }, [resource])
    
        return data  
    }


    const usePost = resource =>{

        const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
    
        const post = data => {
            dispatch({ type: 'REQUEST'})
            axios
                .post(baseUrl + resource + '.json', data)
                .then(res => {
                    dispatch({
                        type: 'SUCCESS',
                        data: res.data
                    })
                })
        }
        return[data, post]
    }


    const useDelete = () =>{

        const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
    
        const remove = resource => {
            dispatch({ type: 'REQUEST'})
            axios
                .delete(baseUrl+resource+'.json')
                .then(() => {
                    dispatch({
                      type: 'SUCCESS',                    
                    })
                })
        }
        return[data, remove]
    }

    return{
        useGet,
        usePost,
        useDelete
    }

}


export default init