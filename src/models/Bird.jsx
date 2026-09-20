import React from 'react'

import birdScene from '../assets/3d/bird.glb';
// import { Scene } from 'three';
import { useGLTF } from '@react-three/drei';




const Bird = () => {
    const { scene, animations } = useGLTF(birdScene)
    return (
        <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
            <primitive object={scene}></primitive>
        </mesh>
    )
}

export default Bird