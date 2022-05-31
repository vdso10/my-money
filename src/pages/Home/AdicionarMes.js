import React from 'react'


const AdicionarMes = () => {
    return(
        <div>
            <h2>Adiconar mês</h2>
            <select>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
            </select>
            <select>
                <option value='01'>01</option>
                <option value='02'>02</option>
            </select>
            <button className='btn btn-success'>Adicionar mês</button>
            <br/>
            <br/>
        </div>

    )
}

export default AdicionarMes
