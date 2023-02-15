import './index.css';
import React, {Suspense, useRef} from 'react';
import {Canvas} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera, useGLTF} from '@react-three/drei';
import './Untitled.gltf';

function Model(props) {
  const { nodes, materials } = useGLTF('./Untitled.gltf')
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera makeDefault={false} far={10000000000} near={0.01} fov={53.13} position={[-15.84, 34.4, 323.93]} rotation={[-0.09, 0, 0]} />
      <mesh geometry={nodes.Polygon.geometry} material={nodes.Polygon.material} position={[0, -17.38, 0]} />
    </group>
  );
}

function App() {
    const ref = useRef()
    return (
        <div className="App">
            <div className="header">
                <div className="autoH">
                    <img className="logo" src={require("./logo.png")} alt="a"/>
                    <h1 className="weather">weather</h1>
                </div>
            </div>

            <div className="body">
                <img className="refresh" src={require("./refresh.png")} alt="b"/>
                <div className="main">
                    <h2 className="temperature">12°C</h2>
                    <h3 className="state">Partly{" "}Cloudy</h3>
                    <h4 className="allDay">Day 14° • Night 4°</h4>
                    <div className ="product-canvas">
                    <Canvas pixelRatio={[1, 2]} camera={{ position: [-10, 15, 15], fov: 50 }}>
                      <Suspense fallback = {null}>
                        <ambientLight intensity={1} />
                        <Model /> 
                      </Suspense>
                      <OrbitControls />
                    </Canvas>
                    </div>
                    <button className="btn">Wed 14</button>
                </div>
            </div>
        </div>
    );
}

export default App;
