import Link from 'next/link'
import colors from '../theme/Colors';


const NavItem = (props) => (
    <li>
        <Link href={props.href}>
            <a>{props.text}</a>
        </Link>
        <style jsx>{`
            li {         
                padding-bottom: 1px;
                padding-top: 1px;
            }

            li:hover {
                padding-bottom: 0px;
                border-bottom: 1px solid ${colors.primaryDark};
            }

            a {
                color: ${colors.primaryDark};
                text-decoration: none;
                font-size: 1.2em;
                font-family: 'Source Sans Pro';
                display: block;
                padding-left: 1em;
                padding-right: 1.2em;
                padding-top: 0.5em;
                padding-bottom: 0.5em;               
            }

        `}</style>
    </li>
)

const Header = () => (
    <nav>
        <ul>
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="/projects" text="Projects" />
        </ul>  
        <style jsx>{`
        ul {          
            list-style-type: none;
            display: flex;
            padding: 0px;
            margin: 0px;
            
            border-bottom: 1px solid grey;
            /* justify-content: center;
 */        }

        nav {              
            margin: 0px;
        }
        `}</style>
    </nav>
)

export default Header