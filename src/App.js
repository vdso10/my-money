import React from 'react'

import Rest from './rest';


const baseUrl = 'https://mymoney-curso-default-rtdb.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseUrl)

function App() {
  
  const data = useGet('movimentacoes/2019-08')
  const [postData, post] = usePost('movimentacoes/2019-08')
  const [deleteData, remove] = useDelete()

  const saveNew = () =>{
    post({ valor: 20, descricao: 'Pizza'})
  }

  const doRemove = () => {
    remove('movimentacoes/2019-08/-N32-ZSUu9vwiHF1NR2L')
  }
  

  return (
    <div>
      <h1>My Money</h1>
      {JSON.stringify(data)}
      {data.loading && <p>Loading...</p>}
      <button onClick={saveNew}>Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
      <button onClick={doRemove}>Deletar</button>
      
    </div>
  );
}

export default App;
