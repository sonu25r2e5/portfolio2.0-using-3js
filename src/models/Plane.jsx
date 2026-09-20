import React from 'react';
import planeScene from '../assets/3d/plane.glb';
import { useGLTF } from '@react-three/drei';

// we spread props to mention
const Plane = ({ isRotating, ...props }) => {

    const { scene, animations } = useGLTF(planeScene);

    return (

        <mesh {...props}>
            <primitive object={scene}></primitive>
        </mesh>
    )
}

export default Plane