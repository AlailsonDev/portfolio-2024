import './Main.css'
import photo from '../assets/foto.jpeg'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const Main = () => {
    return (

    <main className="main">
        <div className='main-content'>
        <img src={photo} alt="photo" className='main-img'/>
        <h1 className='site-title'>Alailson Barbosa</h1>
        <p className='main-paragraph'>Web Developer</p>
        <div className='social-img'>
        <a href="https://www.instagram.com/alailsonbcsilva/" target='blank'><img className='icons-img' src={instagram} alt="Instagram" /></a>
        <a href="https://www.linkedin.com/in/alailsonbarbosa/" target='blank'><img className='icons-img' src={linkedin} alt="Linkedin" /></a>
        <a href="https://github.com/AlailsonDev" target='blank'><img className='icons-img' src={github} alt="Github" /></a>
        </div>
        <a className='contact-btn' href="#contatos">Contato</a>
        </div>
    </main>

    )
    
}

export default Main;