import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Servicos.css'
import site from '../assets/sites.png';
import landingPage from '../assets/landing-page.png';
import eCommerce from '../assets/e-commerce.png';
import manutencao from '../assets/manutencao.png';
import ui from '../assets/ui.png';
import blog from '../assets/blog.png';


const Servicos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = [
    { title: 'Criação de Sites', description: 'Criação de sites sob medida, de acordo com as suas necessidades. Design responsivo para garantir compatibilidade com dispositivos móveis e desktops.', imgUrl: site},
    { title: 'Landing Pages', description: 'Criação de páginas de destino otimizadas e design focado em capturar leads e aumentar sua taxa de conversão.', imgUrl: landingPage},
    { title: 'E-commerce', description: 'Desenvolvimento de lojas online. Integração com sistemas de pagamento e gerenciamento de inventário e carrinho de compras.',  imgUrl: eCommerce},
    { title: 'Manutenção e Suporte', description: 'Atualizações regulares de conteúdo e segurança, assim como correção de bugs e problemas técnicos.',  imgUrl: manutencao },
    { title: 'UI/UX', description: 'Criação de wireframes e protótipos. Testes de usabilidade e desenvolvimento de interfaces intuitivas e agradáveis.',  imgUrl: ui },
    { title: 'Desenvolvimento de Blogs', description: 'Implementação na plataforma WordPress. Customização de temas e plugins e treinamento para gestão de conteúdo.',  imgUrl: blog },
  ];

  return (
    
    <div className="carousel-container">
      <h2 id='servicos' className='services-title'>Serviços</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item-wrapper">
          <div className="carousel-item">
          <img src={item.imgUrl} alt={item.title} className="carousel-item-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Servicos;
