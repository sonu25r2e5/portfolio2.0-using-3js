import { useState, Suspense } from "react";
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader'
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";


const Contact = () => {

    const [form, setForm] = useState({ name: '', email: '', message: '' })
    // we use diable properties. 
    const [isLoading, setIsLoading] = useState(false);  // we use reference nothing more than than

    // we define diferent states here. 
    const [currentAnimation, setCurrentAnimation] = useState('idle');


    const { alert, showAlert, hideAlert } = useAlert();

    const emailJsConfig = {
        serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID
            || import.meta.env.VITE_APP_EMAILJS_SERVICES_ID,
        templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    };



    // create a empy function for handling the things 
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    // handle submit get the vbalue 
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!Object.values(emailJsConfig).every(Boolean)) {
            showAlert({
                text: 'Email service is not configured. Add the EmailJS environment variables and restart the app.',
                type: 'danger',
            });
            return;
        }

        setIsLoading(true);
        setCurrentAnimation('hit');



        emailjs.send(emailJsConfig.serviceId,
            emailJsConfig.templateId,
            {
                from_name: form.name,
                to_name: "Sonu",
                from_email: form.email,
                to_email: 'sk7018059@gmail.com',
                message: form.message,
            },
            emailJsConfig.publicKey
        ).then(() => {
            setIsLoading(false);

            // show success message 
            showAlert({ show: true, text: 'your message has been sent nothing to worry', type: 'success' })
            // create a custom hooks 


            setTimeout(() => {
                hideAlert();
                setCurrentAnimation('idle')

                setForm({ name: '', email: '', message: '' })

            }, [3000])


            // todo : show sucess message
            // todo : hide an alert 
        }).catch((error) => {
            setIsLoading(false);
            // setting the current ELement here. 
            setCurrentAnimation('idle');
            showAlert({
                text: 'We could not send your message. Check your internet connection and EmailJS configuration.',
                type: 'danger',
            });
            console.error('EmailJS request failed:', error);
            // todo : show error message. 

        })

    };
    const handleFocus = () => setCurrentAnimation('walk');
    const handleBlur = () => setCurrentAnimation('idle');

    // let make it reaun 

    return (
        <section className="relative flex lg:flex-row flex-col max-container">

            {alert.show && <Alert {...alert} />}

            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text"> Wanna Talk with me , say hi</h1>
                <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>


                    <label className="text-black-500 font-semibold">Name
                        <input type="text" name="name" className="input" placeholder="Johhny johnny" required value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">Email
                        <input type="email" name="email" className="input" placeholder="give your mail" required value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">
                        Your Message
                        <br />
                        <textarea
                            name="message"
                            className="textarea"
                            rows={4}
                            placeholder="Let me know how i can help you" required value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <button type="submit" className="btn" disabled={isLoading} onFocus={handleFocus} onBlur={handleBlur}>{isLoading ? 'Sending...            ' : 'Send message'}</button>
                </form>
            </div>
            <div className="lg:w-1/2 w-full lg:h-auto md:h-[550] h-[350]">
                <Canvas camera={{
                    position: [0, 0, 5],
                    fov: 74,
                    near: 0.1,
                    far: 1000,
                }}>
                    /// let add light
                    <directionalLight intensity={2.5} position={[0, 0, 1]} />
                    <ambientLight intensity={0.5} />



                // load the
                    <Suspense fallback={<Loader />}>
                        <Fox
                            currentAnimation={currentAnimation}
                            position={[0.5, 0.5, 0.5]}
                            rotation={[12.6, -0.6, 0]}
                            scale={[0.3, 0.3, 0.3]}
                        />
                    </Suspense>
                </Canvas>

            </div>
        </section>
    )
}

export default Contact