
import { Canvas } from 'react-three-fiber'
import {OrbitControls} from 'drei'
import './App.css';

function Box() {
   return ( 
     <mesh>
       <boxBufferGeometry attach='geometry' />
       <meshLambertMaterial attach='material' color='hotpink' />
     </mesh>
   )
}

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Box />
    </Canvas>
  );
}

export default App;
