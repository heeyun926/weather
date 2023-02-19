import ReactDOM from 'react-dom'
import {extend, useFrame, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './index.css'

extend({ OrbitControls })

function Controls() {
  const controls = useRef()
  const { camera, gl } = useThree()
  useFrame(() => controls.current.update())
  return <orbitControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} rotateSpeed={0.5} />
}

ReactDOM.render(
  <Canvas style={{ background: '#272730' }}>
    <mesh>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshNormalMaterial attach="material" />
    </mesh>
    <Controls />
  </Canvas>,
  document.getElementById('root')
)
