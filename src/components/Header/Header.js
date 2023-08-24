import {Link} from 'react-router-dom'
import './header.css';


const Header = (props) => {
    const {description, image, title, subtitle, showButton, redirectTo, buttonTitle} = props
    return (
        <header>
            <div className="hero-container">
                    <div className="hero-description">
                    <h1 className="primary-2" style={{marginBottom: 0}}>{title}</h1>
                    <h4  style={{color: 'white', marginTop: '0'}}>{subtitle}</h4>
                    <p style={{color: 'white'}}>
                     {description}
                    </p>
                    {showButton ? <Link to={redirectTo}><button  aria-label="On Click" className='little-lemon-btn'><span>{buttonTitle}</span></button> </Link> : null}
                    </div>
                    <div className='hero-img-container'>
                    <img className="hero-img" src={image} />
                    </div>
                   
            </div>
        </header>
    )
}

export default Header;