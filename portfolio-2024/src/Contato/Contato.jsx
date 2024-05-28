import '../Contato/Contato.css';
import { useState } from 'react';
import telefone from '../assets/telefone.png';
import whatsapp from '../assets/whatsapp.png';
import emailImg from '../assets/e-mail.png';
import emailjs from '@emailjs/browser';

const Contato = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        
        if(name === '' || email === '' || message === "") {
            alert('Preencha todos os campos')
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_ms8xqve", "template_7ty2jha", templateParams, "FvnS6irdt91GY0plp")
        .then((response) => {
            console.log('Email Enviado!', response.status, response.text)
            alert('Mensagem Enviada!')
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {
            console.log("ERRO: ", err)
        })
    }
        const phoneNumber = '+5581987176814';
        const whatsappNumber = '+5581987176814';
        const emailAddress = 'alailsonbcsilva@gmail.com';
    
    return (
        <div className="contato">
            <h2 id='contatos' className="contato-title">Contatos</h2>
            
            <form className='form' onSubmit={sendEmail}>
                <aside className='contato-aside' id="contato-left">
                    <input className="input-form" type="text" id="name" placeholder="Seu Nome" onChange={(e) => setName(e.target.value)} value={name}/>
                    <input className="input-form" type="email" id="email" placeholder="Seu E-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <textarea className="textarea-form" name="" id="message" placeholder="Digite sua mensagem aqui" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                    <input className='submit-btn' type="submit" id="submit"/>
                </aside>
                <aside className='contato-aside' id="contato-right">
                    <div className='div-contato'>
                       <a href={`tel:${phoneNumber}`} target='blank'><img className='contato-img' src={telefone} alt="Telefone" /></a> 
                        <h3 className='contato-subtitle'>Telefone</h3>
                        <p className='contato-paragraph'>(81) 98717-6814</p>
                    </div>
                    <div className='div-contato'>
                       <a href={`https://wa.me/${whatsappNumber}`} target='_blank'><img className='contato-img' src={whatsapp} alt="Whatsapp" /></a> 
                        <h3 className='contato-subtitle'>Whatsapp</h3>
                        <p className='contato-paragraph'>(81) 98717-6814</p>
                    </div>
                    <div className='div-contato'>
                        <a href={`mailto:${emailAddress}`} target='_blank'><img className='contato-img' src={emailImg} alt="E-mail" /></a>
                        <h3 className='contato-subtitle'>E-mail</h3>
                        <p className='contato-paragraph'>alailsonbcsilva@gmail.com</p>
                    </div>
                </aside>
            </form>
            
        </div>
    )
} 

export default Contato;