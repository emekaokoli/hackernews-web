import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { DataContext } from './context/store';
import { Router } from './routes/Routes';
import './styles/App.css';

function App() {
  const [searchText, setSearchText] = useState('');

  return (
    <main className="App">
      <DataContext.Provider
        value={{
          searchText,
          setSearchText,
        }}
      >
        <RouterProvider router={Router} />
      </DataContext.Provider>
    </main>
  );
}

export default App;
