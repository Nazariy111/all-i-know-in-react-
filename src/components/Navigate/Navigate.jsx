import { NavLink } from "react-router-dom";
import css from './Navigate.module.css';

const Navigate = () => {
    return (
        <header className={css.headerContainer}>
            <div >
                <nav className={css.nav}>
                    <ul className={css.navContainer}>
                        <li className={css.navLink}>
                            <NavLink className={css.navLinkBtn} to="/">Home</NavLink>
                        </li >
                        <li className={css.navLink}>
                            <NavLink className={css.navLinkBtn} to="/click-counter">Click counter</NavLink>
                        </li>
                        <li className={css.navLink}>
                            <NavLink className={css.navLinkBtn} to="/form">Form</NavLink>
                        </li>
                        <li className={css.navLink}>
                            <NavLink className={css.navLinkBtn} to="/formik">Formik</NavLink>
                        </li>
                        <li className={css.navLink}>
                            <NavLink className={css.navLinkBtn} to="/balance">Balance</NavLink>
                        </li>
                        <li className={css.navLink}>
                            <NavLink className={css.navLinkBtn} to="/vanilla-http">Vanilla HTTP</NavLink>
                        </li>
                        <li className={css.navLink}>
                            <NavLink className={css.navLinkBtn} to="/http-redux">HTTP/Redux</NavLink>
                        </li>
                    </ul>
                    

                </nav>
            </div>
            
        </header>
        
    )
}

export default Navigate