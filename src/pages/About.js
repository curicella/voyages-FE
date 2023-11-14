import React from 'react'
import "../styles/about.css"

const About = () => {
  return (
    <div className='aboutMain'>
        <div className='aHeader'>
            <h2>About us</h2>
            <h1>All your To Do's in one place</h1>
            <p>To do is your personal productivity companion! 
                We're thrilled to have you here and want to share 
                a little about who we are and what drives us. </p>
        </div>
        <div className='aboutCards'>
            <div className='aboutCard' id='2'>
                <div className='cardContent'>
                    <h1>Here to keep you organized</h1>
                    <p>Our mission is simple: to help you achieve more, stress less, 
                        and lead a more balanced life. 
                        We aim to make task management as effortless and enjoyable as possible,
                         so you can focus on what matters most to you.</p>
                </div>
            </div>
            <div className='aboutCard' id='3'>
                <div className='cardContent'>
                    <h1>Our Commitment to You</h1>
                    <p>TWe are dedicated to providing you with the best to-do app experience possible. 
                        Our team is continuously working to improve and enhance the app, adding new features, 
                        and making it more user-friendly.</p>
                </div>
            </div>
        </div>

        <div className='ImagePart'>
            <div className='imgText'>
                <h1>Discover the happiness that comes from seamless productivity and organization.</h1>
                <p>With our app you'll have a chance to experience a sense of accomplishment, 
                    much like the radiant smiles of those who appreciate a well-structured life. 
                    We provide the tools and features that make task management a breeze, 
                    whether it's for professional projects, personal aspirations, or daily tasks.</p>
            </div>
            <img src={"./abtPhoto_1.jpg"} alt='Smiling woman looking at her phone'></img>
        </div>
    </div>
  );
}

export default About;
