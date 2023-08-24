import './main.css';    
import Special from '../HomePage/Specials';
import BruchettaImage from '../../assets/bruchetta.svg';
import GreekSaladImage from '../../assets/greek-salad.jpg';
import LemonDesertImage from '../../assets/lemon-dessert.jpg'
const Main = () => {
    const weekSpecials = [
        {
            item: 'Greek Salad',
            image: GreekSaladImage,
            price: 12.99,
            description: 'The famous greek salad of cripsy lettuce, peppers, olives, and our Chicago Style Feta cheese, garnished  with crunch garlic and rosemary croutons.'
        },
        {
            item: 'Bruchetta',
            image: BruchettaImage,
            price: 5.99,
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasonsed with salt and olive oil. '
        },
        {
            item: 'Lemon Dessert',
            image: LemonDesertImage,
            price: 5.00,
            description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined'
        }
        
    ]
    return (
        <div className="main-container">
            <div className="main-header">
                <h2>This weeks specials!</h2>
                <button className='little-lemon-btn online-menu'><span>Online Menu</span></button>
            </div>
        <main>
            {weekSpecials.map((special) => {
            return <Special {...special} />})
            }
        </main>
        </div>
    )
}

export default Main;