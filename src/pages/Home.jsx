{/* <div className='absolute top-28 left-0  right-0 z-0 flex items-center justify-center'>
    POP up
</div> */}

import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Bird from '../models/Bird'
import Plane from '../models/Plane';
import Sky from '../models/Sky'


const Home = () => {
    // adjust the site
    // for rotating we place here. understand that. 
    const [isRotating, setIsRotating] = useState(false);


    // adjusting island screen 
    const adjustIslandForScreenSize = () => {
        // for scalling and position we place here. 
        let screenScale = null;
        let screenPostion = [0, -6.5, -43];
        let rotation = [0.0, 4.8, 0];


        // managing the screeen size nothing else 
        if (window.innerWidth < 768) {
            // it has 3 axis
            screenScale = [0.9, 0.9, 0.9]
        } else {
            screenScale = [1.1, 1.1, 1.1]
        }
        return [screenScale, screenPostion, rotation]
    }

    // for addjusting the plane size 
    const adjustPlaneForScreenSize = () => {
        // for scalling and position we place here. 
        let screenScale, screenPosition;
        // let rotation = [0.0, 4.8, 0];

        // plane poisiton
        if (window.innerWidth < 768) {
            // it has 3 axis
            screenScale = [1.5, 1.5, 1.5]
            screenPosition = [0, -6.5, 0]
        } else {
            screenScale = [1, 1, 1]
            screenPosition = [0, 0.5, -4]
        }
        return [screenScale, screenPosition]
    }



    // const islane

    const [islandScale, isLandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition, rotation] = adjustPlaneForScreenSize();



    return (
        <section className='w-full h-screen relative'>
            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
                <Suspense fallback={<Loader />}>
                    {/* // lgihting in 3 */}
                    {/* for controlling the bright siddes and more */}
                    <directionalLight position={[1, 10, 1]} intensity={1} />
                    {/* controlling the postion of instity here */}
                    <ambientLight intensity={0.1} />
                    <hemisphereLight skyColor="#880808" groundColor='#0000' intensity={1} />
                    <Bird />
                    <Sky />
                    <Island
                        // we gonna pass here. 
                        position={isLandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        setIsRotating={setIsRotating}
                    />
                    <Plane
                        isRotating={isRotating}
                        planeScale={planeScale}
                        planePosition={planePosition}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home