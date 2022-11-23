import './App.css';
import styled from 'styled-components'

import { importData } from './importer'

const BigButton = styled.button`
  height: 5rem;
  width: 10rem;
  font-size: 1.25em;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Import a file</h1>
        <BigButton onClick={importData}>Click to import!</BigButton>
      </header>
    </div>
  );
}

export default App;
