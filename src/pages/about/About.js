import React from 'react';
import { Link} from 'react-router-dom';

const About = () => {
  return (
    <div>
        <h2>About Page</h2>
        <Link to="/" className='btn'>
            Go back to Home
        </Link>
    </div>
  );
}

export default About;
