import React, { useState, useContext } from "react";
import '@styles/Header.scss';
import Menu from '@components/Menu'
import icon_menu from '@icons/icon_menu.svg';
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import icon_shopping_cart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle); // cambia el estado a su inversa en este caso true
    }

    return (
        <nav>
            <img src={icon_menu} alt="menu" className="menu" />

            <div className="navbar-left">
                <img src={logo_yard_sale} alt="logo" className="nav-logo" />

                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li className="navbar-shopping-cart">
                        <img src={icon_shopping_cart} alt="shopping cart" />
                        {/* mostrara cuantos elementos tiene de lo contrario null */}
                        { state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul> 
            </div>
            {toggle && <Menu />} {/* Si toggle es falso, esto no se muestra de lo contrario si*/}
        </nav>
    );
}

export default Header;