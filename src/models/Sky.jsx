import React from 'react'

import { useRef } from 'react'

import { useFrame } from '@react-three/fiber'


// importing the sky sky here. 
import skyScene from '../assets/3d/sky.glb'
import { useGLTF } from '@react-three/drei'






// we need to move out here. 
const Sky = ({ isRotating }) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    // for moving out the sky we use this method. and controlling the background images nothing more 
    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += 0.36 * delta;
        }
    })

    return (
        // our island is containing of lot of mesh ्र
        // we allwasy suse mesh here. 
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky