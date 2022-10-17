import './Navigation.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <>
            <nav className="nav bg-redPrimary">
                <img className='navLogo' src={require('../../../../data/images/logo2_black_small.png')} alt="Site logo"></img>
                <ul>
                    <div>
                        <li><Link className='btn btn-outline-goldLight rounded-2 px-4' to='/theatres'>Theatres</Link></li>
                        <li><Link className='btn btn-outline-goldLight rounded-2 px-4' to='/movies'>Movies</Link></li>
                        <li><Link className='btn btn-outline-goldLight rounded-2 px-4' to='/theatres'>Program</Link></li>
                    </div>
                    <div>
                        <li><Link className=' loginBtn btn btn-outline-goldLight rounded-2 px-4' to='login'>Login</Link></li>
                    </div>
                </ul>
            </nav>
        </>
    )
}