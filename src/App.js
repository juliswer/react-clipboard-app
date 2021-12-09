import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';

function App() {

  const [copied, setCopied] = useState(false)

  return (
    <div className="App">
      <CopyToClipboard text="https://faztweb.com">
          <p onClick={() => toast('Texto Copiado', {position: "bottom-right"})} style={{textAlign: 'center'}}>copy me!!!</p>
      </CopyToClipboard>

      <Toaster />
    </div>
  );
}

export default App;
