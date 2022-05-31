import React from 'react'
import Rest from '../../utils/rest';
import{ Link } from 'react-router-dom'

const baseUrl = 'https://mymoney-curso-default-rtdb.firebaseio.com/'
const { useGet } = Rest(baseUrl)



const Meses = () =>{

    const data = useGet('meses')

    if(data.loading){
        return <span>Carregando...</span>
    }

    if(Object.keys(data.data).length >0){
    return(
        <div>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Mês</th>     
                        <th>Previsão entrada</th>
                        <th>Entrada</th>
                        <th>Previsão saida</th>
                        <th>Saida</th>
                    </tr>
                </thead>                            
                <tbody>
                    {
                        Object
                            .keys(data.data)
                            .map(mes => {
                                return (
                                    <tr key={mes}>      
                                        <td><Link to={`/movimentacoes/${mes}`}>{mes}</Link></td>
                                        <td>{data.data[mes].previsao_entrada}</td>
                                        <td>{data.data[mes].entradas}</td>
                                        <td>{data.data[mes].previsao_saida}</td>
                                        <td>{data.data[mes].saidas}</td>
                                        
                                    </tr>
                                )
                            })
                    }                                                            
                </tbody>
            </table> 
        </div>        
    )

    }
    return null
}

export default Meses

