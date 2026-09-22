


import { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import birdScene from '../assets/3d/bird.glb';

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        const action = actions?.['Take 001'];

        if (!action) return;

        action.reset();
        action.play();

        return () => action.stop();
    }, [actions]);

    useFrame(({ clock }) => {
        const bird = birdRef.current;
        if (!bird) return;

        const elapsed = clock.getElapsedTime();
        // Keep the orbit centered on the island/tower group from Home.jsx.
        const towerPosition = [0, -6.5, -43];
        const radius = 20;
        const angle = elapsed * 0.7;
        const baseScale = 0.02;
        const tinyShrink = Math.sin(elapsed * 1) * 0.0006;

        bird.position.x = towerPosition[0] + Math.sin(angle) * radius;
        bird.position.y = towerPosition[1];
        bird.position.z = towerPosition[2] + Math.cos(angle) * radius;
        bird.rotation.y = -angle + Math.PI / 2;
        bird.scale.setScalar(Math.max(0.0048, baseScale + tinyShrink));
    });

    return (
        <group ref={birdRef}>
            <primitive object={scene} />
        </group>
    );
};

export default Bird;