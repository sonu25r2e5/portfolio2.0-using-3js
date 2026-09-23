{/* <div className='absolute top-28 left-0  right-0 z-0 flex items-center justify-center'>
    POP up
</div> */}

import { Suspense, useEffect, useMemo, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import Sky from '../models/Sky';
import HomeInfo from '../components/HomeInfo';

import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons';









const Home = () => {

    const audioRef = useRef(new Audio(sakura));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [screenWidth, setScreenWidth] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth : 1024,
    );
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play();
        }


        if (typeof window === 'undefined') return;

        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            audioRef.current.pause();

        }
    }, [isPlayingMusic]);

    const islandConfig = useMemo(() => {
        const isSmallScreen = screenWidth < 768;

        return {
            scale: isSmallScreen ? [0.9, 0.9, 0.9] : [1.1, 1.1, 1.1],
            position: [0, -6.5, -43],
            rotation: [0.0, 4.8, 0],
        };
    }, [screenWidth]);

    const planeConfig = useMemo(() => {
        const isSmallScreen = screenWidth < 768;

        return {
            scale: isSmallScreen ? [1.5, 1.5, 1.5] : [1, 1, 1],
            position: isSmallScreen ? [0, -6.5, 0] : [0, 0.5, -4],
        };
    }, [screenWidth]);

    const { scale: islandScale, position: isLandPosition, rotation: islandRotation } = islandConfig;
    const { scale: planeScale, position: planePosition } = planeConfig;

    return (
        <section className='w-full h-screen relative'>

            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <HomeInfo currentStage={currentStage} />}

            </div>


            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 10, 1]} intensity={1} />
                    <ambientLight intensity={0.1} />
                    <hemisphereLight skyColor="#880808" groundColor='#0000' intensity={1} />
                    <Bird />
                    // we need to rotate the sky
                    // we need to pass the arguments here. nothing else more
                    <Sky isRotating={isRotating} />

                    <Island
                        position={isLandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        isRotating={isRotating}
                        planeScale={planeScale}
                        planePosition={planePosition}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>
            <div className='absolute bottom-2 left-2'>
                <img src={!isPlayingMusic ? soundoff : soundon} alt="sound" className='w-10 h-10 cursor-pointer object-contain' onClick={
                    () => setIsPlayingMusic(!isPlayingMusic)
                } />

            </div>
        </section>
    );
};

export default Home