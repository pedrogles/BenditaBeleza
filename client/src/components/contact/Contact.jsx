import '../../style/contact/contact.scss';
import Logo from '../../assets/logo/BBFullColor.png';
import { AiOutlineMail, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

function Contact() {
    return (
        <section id='contact'>
            <div className='image'>
                <img src={Logo} alt="Logo Bendita Beleza R.V Cabeleleira" />
                <div className='icons'>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551" rel="noreferrer" target="_blank" alt="Link para Whatsapp">
                        <AiOutlineWhatsApp />
                    </a>
                    <a href="mailto:renatarvcabelos@gmail.com" rel="noreferrer" target="_blank" alt="Link para Email">
                        <AiOutlineMail />
                    </a>
                    <a href="https://www.instagram.com/benditabelezarv/" rel="noreferrer" target="_blank" alt="Link para Instagram">
                        <AiOutlineInstagram />
                    </a>
                </div>
            </div>
            <div className='whatsapp'>
                <div className='text'>
                    <h5>Prezando sempre por<br></br> <span>Sua melhor experiência!</span></h5>
                </div>
                <p>Para agendar seu horário ou tirar dúvidas</p>
                <button>
                    <a href="https://api.whatsapp.com/send?phone=5583988710551&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Desejo%20agendar%20um%20hor%C3%A1rio." rel="noreferrer" target="_blank" alt="Link para Whatsapp">Clique aqui</a>
                </button>
            </div>
            <footer className='footer'>
                <div className='footerContainer'>
                    <div className='contactHour'>
                        <div className='hours'>
                            <h6>Horário de funcionamento:</h6>
                            <p>Terça a Sábado, das 9h às 18h.</p>
                        </div>
                        <div className='contact'>
                            <h6>Contato:</h6>
                            <a href="tel:+5583988710551">(83) 98871-0551</a>
                        </div>
                    </div>
                    <div className='address'>
                        <h6>Localização:</h6>
                        <p>Rua Professor Renato Carneiro da Cunha, jaguaribe, 172.</p>
                        <p>Localizado ao lado do cruzamento com a Rua Primeiro de Maio.</p>
                    </div>
                    <div className='social'>
                        <h6>Links:</h6>
                        <a href="mailto:renatarvcabelos@gmail.com" rel="noreferrer" target="_blank" alt="Link para Email">
                            <AiOutlineMail />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5583988710551" rel="noreferrer" target="_blank" alt="Link para Whatsapp">
                            <AiOutlineWhatsApp />
                        </a>
                        <a href="https://www.instagram.com/benditabelezarv/" rel="noreferrer" target="_blank" alt="Link para Instagram">
                            <AiOutlineInstagram />
                        </a>
                    </div>
                </div>
                <div className='dev'>
                    <p>© 2022</p>
                    <h6>Desenvolvido por <a href="https://www.linkedin.com/in/pedrogles/" target="_blank" rel="noopener noreferrer">Pedro Gabriel</a>.</h6>
                </div>
            </footer>
        </section>
    )
}

export default Contact;