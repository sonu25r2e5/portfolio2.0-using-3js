import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <section className='cta'>
            <p className='cta-text'>
                Do you have any project in your mind
                <br className='sm:block hidden' />
                Let's build something buddy
            </p>
            <Link to='/contact' className='btn'>Contact</Link >
        </section>
    )
}

export default CTA