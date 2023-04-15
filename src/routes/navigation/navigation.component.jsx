import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../asset/crown.svg';
import './navigation.style.scss';

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'> shop</Link>
                    <Link className="nav-link" to='/auth'> signIn</Link>
                </div>
            </div>
            <Outlet />
        </>

    )
}
export default Navigation;