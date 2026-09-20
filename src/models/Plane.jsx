import React from 'react';
import planeScene from '../assets/3d/plane.glb';
import { useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, planeScale, planePosition, ...props }) => {
    const { scene } = useGLTF(planeScene);

    return (
        <mesh
            scale={planeScale}
            position={planePosition}
            {...props}
        >
            <primitive object={scene} />
        </mesh>
    );
};

export default Plane;