import { useContext} from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    // const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <header>
            <h1><Link className="home" to="/">Fitness Products Reviews</Link></h1>
            <nav>
                <Link to="/catalog">All Reviews</Link>
                {(
                    <div id="user">
                        <span></span>
                        <Link to="/create-review">Create Review</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                )}

                { (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
};