import {Suspense, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Bloom, EffectComposer} from "@react-three/postprocessing";
import {Experience} from "./components/Experience.jsx";
import { Canvas } from "@react-three/fiber";
import { UI } from "./components/UI.jsx";

function App() {

  return (
      <>
          <Canvas shadows camera={{position: [0, 0, 8], fov: 42}}>
              <fog attach="fog" args={["#171720", 10, 30]}/>
              <Suspense>
                  <Experience/>
              </Suspense>
              <EffectComposer>
                  <Bloom mipmapBlur intensity={0.9}/>
              </EffectComposer>
          </Canvas>
          <UI />
      </>
  );
}

export default App
