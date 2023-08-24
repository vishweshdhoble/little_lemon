import React from 'react';
import Header from '../Header/Header';
import Main from '../MainSection/Main';
import Footer from '../Footer';
import HeroLogo from '../../assets/hero-logo.png'


const HomePage = () => {
    const title = 'Little Lemon'
    const description = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
    const subtitle = 'Chicago'
    const buttonTitle = "Reserve a Table"
    
    return (
          <div className="content-container">
       <Header title={title} description={description} image={HeroLogo} subtitle={subtitle} buttonTitle={buttonTitle} redirectTo={'/booking'} showButton={true} />
       <Main />
       <Footer />
       </div>
    )
}

export default HomePage;