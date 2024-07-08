import './style.css'
import {Link} from 'react-router-dom'
import Example from '../Example'
export default function Header(){
    return(
        <div class="header">

                <h3>My App</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
                 
        </div>
    )
}