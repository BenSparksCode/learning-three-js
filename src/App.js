import { Canvas } from 'react-three-fiber'
import { OrbitControls, Stars } from 'drei'
import { Physics, useBox, usePlane } from 'use-cannon'
import './App.css';

function Box(props) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0,5,0],
    ...props
  }))

  return (
    <mesh 
    onClick={()=>{
      api.velocity.set(0,2,0)
    }}
    ref={ref} position={[0, 2, 0]} >
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='hotpink' />
    </mesh>
  )
}

function Plane(props) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props
  }))

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[300, 300]} />
      <meshLambertMaterial attach='material' color='lightblue' />
    </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
      />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  );
}

export default App;
