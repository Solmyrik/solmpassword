import { useState } from 'react';
import Generator from './components/Generator';
import Header from './components/Header';

function App() {
  const [colorTheme, setColorTheme] = useState('red');
  return (
    <div style={{ backgroundColor: colorTheme }} className="wrapper">
      <Header />
      <Generator setColorTheme={setColorTheme} />
    </div>
  );
}

export default App;
