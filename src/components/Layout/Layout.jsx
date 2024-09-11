import { Toaster } from "react-hot-toast"
import Navigate from "../Navigate/Navigate"
import css from './Layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={css.layoutContainer}>
            <Navigate />
            <div className={css.childrenContainer}>{children}</div>
            <Toaster/>
        </div>
    )
}

export default Layout