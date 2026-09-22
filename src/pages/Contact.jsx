import { useState, Suspense } from "react";
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader'



const Contact = () => {

    const [form, setForm] = useState({ name: '', email: '', message: '' })
    // we use diable properties. 
    const [isLoading, setIsLoading] = useState(false);  // we use reference nothing more than than


    // create a empy function for handling the things 
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    // handle submit get the vbalue 
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.send(import.meta.env.VITE_APP_EMAILJS_SERVICES_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Sonu",
                from_email: form.email,
                to_email: 'sk7018059@gmail.com',
                message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            // todo : show sucess message
            // todo : hide an alert 
            setForm({ name: '', email: '', message: '' })
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
            // todo : show error message. 

        })

    };
    const handleFocus = () => { };
    const handleBlur = () => { };


    return (
        <section className="relative flex lg:flex-row flex-col max-container">
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


                // load the
                    <Suspense fallback={Loader}>
                        <Fox
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