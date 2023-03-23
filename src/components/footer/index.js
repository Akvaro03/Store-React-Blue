import Style from './footer.module.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    return (
        <div className={Style.ContentFooter}>
            <div className={Style.ContentIconFooter}>
                <WhatsAppIcon />
                <a href='www.google.com'>54341430</a>
            </div>
            <div className={Style.ContentIconFooter}>
                <LocalPhoneIcon />
                <a href='www.google.com'>54341430</a>
            </div>
            <div className={Style.ContentIconFooter}>
                <EmailIcon />
                <a href='www.google.com'>bluStore@gmail.com</a>
            </div>
        </div>
    );
}

export default Footer;