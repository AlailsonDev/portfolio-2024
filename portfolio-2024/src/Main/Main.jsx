import './Main.css'
import photo from '../assets/foto.jpeg'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const Main = () => {
    return (

    <main className="main">
        <img src={photo} alt="photo" className='main-img'/>
        <h1 className='site-title'>Alailson Barbosa</h1>
        <p className='main-paragraph'>Web Developer</p>
        <div className='social-img'>
        <img className='icons-img' src={instagram} alt="Instagram" />
        <img className='icons-img' src={linkedin} alt="Linkedin" />
        <img className='icons-img' src={github} alt="Github" />
        </div>
        <a className='contact-btn' href="#">Contato</a>
    </main>

    )
    
}

export default Main;