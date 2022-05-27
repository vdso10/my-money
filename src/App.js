import React from 'react'
import useGet from './useGet'
import usePost from './usePost';
import useDelete from './useDelete';


const url = 'https://mymoney-curso-default-rtdb.firebaseio.com/movimentacoes.json'

function App() {
  
  const data = useGet(url)
  const [postData, post] = usePost(url)
  const [deleteData, remove] = useDelete()

  const saveNew = () =>{
    post({ valor: 20, descricao: 'Pizza'})
  }
  

  return (
    <div>
      <h1>My Money</h1>
      {JSON.stringify(data)}
      {data.loading && <p>Loading...</p>}
      <button onClick={saveNew}>Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
      
    </div>
  );
}

export default App;
