import { useState } from "react"

const Contact = () => {

    const [form, setForm] = useState({ name: '', email: '', message: '' })
    // we use diable properties. 
    const [isLoading, setIsLoading] = useState(false);  // we use reference nothing more than than


    // create a empy function for handling the things 
    const handleChange = () => { };
    const handleFocus = () => { };
    const handleBlur = () => { };



    return (
        <section className="relative flex lg:flex-row flex-col max-container">
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text"> Wanna Talk with me , say hi</h1>
                <form className="w-full flex flex-col gap-7 mt-14">
                    <label className="text-black-500 font-semibold">Name
                        <input type="text" name="name" className="input" placeholder="Johhny johnny" requried value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">Email
                        <input type="email" name="email" className="input" placeholder="give your mail" requried value={form.email}
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
                            placeholder="Let me know how i can help you" requried value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <button type="submit" className="btn" disabled="isLoading" onFocus={handleFocus} onBlur={handleBlur}>{isLoading ? 'Sending...            ' : 'Send message'}</button>
                </form>
            </div>
        </section>
    )
}

export default Contact