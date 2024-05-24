import '../Sobre/Sobre.css';
import html from '../assets/html.png';
import css from '../assets/css-3.png';
import javascript from '../assets/js.png';
import react from '../assets/react.png';
import angular from '../assets/angular.png';
import bootstrap from '../assets/bootstrap.png';
import git from '../assets/git.png';
import wordpress from '../assets/wp.png';
import figma from '../assets/figma.png';


const Sobre = () => {

    return (
        <div className='about'>
            <aside className='about-left'>
                <h2 className='about-title'>Sobre</h2>
                <p className='about-paragraph'>
                    <span className='hello'>Olá</span>, meu nome é Alailson e sou um desenvolvedor que reside em Recife.
                    Tenho experiência na criação de interfaces web intuitivas e responsivas e 
                    tenho paixão por transformar ideias em realidade digital.
                    Acredito na criação de experiências web acessíveis e inclusivas. 
                    Minha abordagem se foca na performance, usabilidade e código limpo.
                    Quando não estou codando, gosto de jogar video games e ouvir músicas e podcasts.                    
                </p>
            </aside>
            <aside className='about-right'>
            <h2 className='about-title'>Habilidades</h2>
            <figure className='about-icons'>
                <img className='about-icons-style' src={html} alt="html" />
                <img className='about-icons-style' src={css} alt="css" />
                <img className='about-icons-style' src={javascript} alt="javascript" />
                <img className='about-icons-style' src={react} alt="react" />
                <img className='about-icons-style' src={angular} alt="angular" />
                <img className='about-icons-style' src={bootstrap} alt="bootstrap" />
                <img className='about-icons-style' src={git} alt="git" />
                <img className='about-icons-style' src={wordpress} alt="wordpress" />
                <img className='about-icons-style' src={figma} alt="figma" />
            </figure>
            </aside>
        </div>
    )

}

export default Sobre;