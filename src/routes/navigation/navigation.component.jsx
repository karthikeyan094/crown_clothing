import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../asset/crown.svg';
import { UserContext } from "../../contexts/user.context";
import { CartContext } from '../../contexts/cart.context';
import './navigation.style.scss';
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext);
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'> shop</Link>
                    {
                        currentUser ? (<span className="nav-link" onClick={signOutUser}>SignOut</span>) : (
                            <Link className="nav-link" to='/auth'> signIn</Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>

    )
}
export default Navigation;