import './menu.css';
import { Link, useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate(); // Ensure useNavigate is inside the component

    return (
        <div className='menu'>
            {/* Use onClick with navigate to redirect */}
            <div className='name' onClick={() => navigate('/home')}>About Me</div>
            <div className='navbar'>
                <Link to="/projects"><div>Projects</div></Link>
                <Link to="/hobbies"><div>Hobbies</div></Link>
                <Link to="/awards"><div>Awards</div></Link>
                <Link to="/contacts"><div>Contacts</div></Link>
            </div>
        </div>
    );
}

export default Menu;
