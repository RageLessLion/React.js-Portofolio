import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Experience} from "./components/Experience.jsx";
import {Canvas} from "@react-three/fiber";

function App() {

  return (
        <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
            <Experience />
        </Canvas>
  );
}

export default App
