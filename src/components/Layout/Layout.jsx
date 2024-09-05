import Navigate from "../Navigate/Navigate"

const Layout = ({children}) => {
    return (
        <div>
            <Navigate />
            <div>{children}</div>
        </div>
    )
}

export default Layout