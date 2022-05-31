import React from 'react'


import Rest from '../utils/rest';
const baseUrl = 'https://mymoney-curso-default-rtdb.firebaseio.com/'
const { useGet } = Rest(baseUrl)


const Movimentacoes = ({match}) =>{
    
    const data = useGet(`movimentacoes/${match.params.data}`)
    return (
        <div className='container'>
            <h2>Movimentações</h2>
            <table className='table table-light'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                { data.data && 
                    Object
                        .keys(data.data)
                        .map(movimentacao => {
                            return (
                                <tr key={movimentacao}>                                          
                                    <td>{data.data[movimentacao].descricao}</td>
                                    <td>{data.data[movimentacao].valor}</td>                                                                        
                                </tr>
                            )
                        })
                    }            
                </tbody>
                
            </table>
            
        </div>
    )
}

export default Movimentacoes