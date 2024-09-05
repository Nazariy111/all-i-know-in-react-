import { NavLink, Link} from "react-router-dom";

const Navigate = () => {
    return (
        <header>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/click-counter">Click counter</NavLink>
                        </li>
                    </ul>
                    

                </nav>
            </div>
            
        </header>
        
    )
}

export default Navigate