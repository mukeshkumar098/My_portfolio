import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import Project from './component/Project';
import Contect from './component/Contect';

function App() {

  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
  
      <Header projectRef={projectRef} contactRef={contactRef} />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Main />
              <div ref={projectRef}>
                <Project />
              </div>
              <div ref={contactRef}>
                <Contect />
              </div>
            </>
          } 
        />

    
        <Route path="/project" element={<Project />} />
        <Route path="/contect" element={<Contect />} />
      </Routes>
    </>
  );
}

export default App;
