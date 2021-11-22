import React, {useState, useRef, useEffect, Suspense} from 'react'

import Earth from './Scene';
import Sus from './AmongUs';

import { Canvas, useLoader } from '@react-three/fiber'
import { Stars, OrbitControls, useGLTF, Stage } from '@react-three/drei'

interface BackgroundProps {
  y: number,
  rY: number,
}

const Background: React.FC<BackgroundProps> = ({y, rY}) => {
    return (
      <div className="background">
        <Canvas
        camera={{position:[30,0,30]}}
        >
          <color attach="background" args={['#1e2243']} />
          <ambientLight intensity={10} />
          <spotLight position={[50,50,50]} intensity={20}  />
          <Suspense fallback={null}>
            <Stars/>
            <Earth scale={[.02,.02,.02]} position={[0,0,0]} /> 
            <Sus rotation={[rY,0.1,0]} scale={[2,2,2]} position={[20, y, 20]}  />
          </Suspense>
        </Canvas>
      </div>
    );
}

export default Background;