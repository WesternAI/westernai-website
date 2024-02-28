// import css
import '../css/Contact.css';

// import social media icons
import SOCIAL_INFO from '../../pagejs/SOCIAL_INFO';

const SocialLink = ({link, icon, title}) => {
    return (
        <a className="social-media-link" href={link} target='_blank'>
            <img title = {title} src={icon}></img>
        </a>
    )
}

const Contact = () => {
    return (
        <footer className = 'contact' id = 'contact'>
            
            <div className = 'contact-container'>
                {SOCIAL_INFO.map((social) => {
                    return (<SocialLink link={social.link} icon={social.img} title={social.name} />)
                })}
            </div>

            <div className="contact-description">
                brought to you by the communications team
            </div>
            <div className="club-info">
                @2024 Western Artificial Intelligence Club
            </div>
        </footer>
    )
}
export default Contact;