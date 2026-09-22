import { useEffect, useRef } from 'react';
import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({ isRotating, planeScale, planePosition, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        const action = actions?.['Take 001'];

        if (!action) return;

        if (isRotating) {
            action.reset();
            action.play();
        } else {
            action.stop();
        }

        return () => action.stop();
    }, [actions, isRotating]);

    return (
        <group ref={ref} scale={planeScale} position={planePosition} {...props}>
            <primitive object={scene} />
        </group>
    );
};

export default Plane;