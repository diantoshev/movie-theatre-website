import './Navigation.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <>
            <nav className="nav">
                <div>
                    <Link to='home'><img className='navLogo' src={require('../../../../assets/logo2_red_medium-2.png')} alt="Site logo"></img></Link>
                </div>
                <ul>
                    <div>
                        <li><Link className='btn btn-outline-goldDark px-4' to='/theatres'>Theatres</Link></li>
                        <li><Link className='btn btn-outline-goldDark px-4' to='/movies'>Movies</Link></li>
                        <li><Link className='btn btn-outline-goldDark px-4' to='/theatres'>Program</Link></li>
                    </div>
                    <div>
                        <li><Link className=' loginBtn btn btn-outline-goldDark rounded-2 px-4' to='login'>Login</Link></li>
                    </div>
                </ul>
            </nav>
        </>
    )
}