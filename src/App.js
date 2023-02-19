import './index.css';
import React, {Suspense, useRef} from 'react';
import {Canvas } from '@react-three/fiber'
import {PerspectiveCamera, useGLTF, OrbitControls} from '@react-three/drei';


function Model(props) {
    const {nodes} = useGLTF("/Untitled.gltf");
    const ref = useRef()
    return (
      
        <group {...props} dispose={null}>
      <ambientLight intensity={0.5} />
      <directionalLight
        ref={ref}
        intensity={0.6}
        position={[0, 2, 2]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
            <PerspectiveCamera
                makeDefault={false}
                far={10000}
                near={10}
                fov={53.1}
                position={[-90, -90, 323.9]}
                rotation={[-0.1, 0, 0]}/>
            <mesh
                geometry={nodes.Polygon.geometry}
                material={nodes.Polygon.material}
                position={[-0, -0.0, -0]}/>
        </group>
    );
}

useGLTF.preload("/Untitled.gltf");



function App() {
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
                    <div className="product-canvas">
                        <Canvas size={[`1000px`,`2000px`]}
                        style={{width:`100%`, height: `500px`, position: `relative`, alignitems: `center`}}> <Suspense
                        fallback={null}>
                          <ambientLight/>
                          <directionalLight />
                          
                        <Model scale ={[0.025,0.025,0.025]}/>
                        <OrbitControls rotateSpeed={0.4}  />
                        {/*<Environment preset="sunset" background blur ={0.5} />*/}
                        </Suspense>
                        </Canvas>
                        </div>
                        <button className="btn">Wed 14</button>
                        </div>
                        </div>
                        </div>
    );
}
export default App;