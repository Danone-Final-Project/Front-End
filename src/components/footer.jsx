import { Link, useLocation } from "react-router-dom";

function Footer (){

    const location = useLocation()
    const hiddenPaths = ['/login', '/register'];
    const hideFooter = hiddenPaths.includes(location.pathname)
    if (hideFooter){
    return null;
    }

    return(
        <footer>
        <div className="column left"> 
            <div className="text">Butuh informasi tentang diet? D’care solusinya!</div>
            <p>Informasi dan alat bantuan untuk diet yang bisa kamu dapatkan dari rumah!</p>
        </div>
        <div className="column right">
            <div className="footer-container">
                <div className="footer-heading footer-1">
                    <h2>Navigasi</h2>
                    <Link to='/'>Beranda</Link>
                    <Link to='/bmi'>Kalkulator BMI</Link>
                    <Link to='/article'>Article</Link>
                </div>
                <div className="footer-heading footer-2">
                    <h2>Komunitas</h2>
                    <a href="#">Tentang Kita</a>
                    <a href="#">Pengembang</a>
                    <a href="#">Blog</a>
                </div>
                <div className="footer-heading footer-3">
                    <h2>Lainnya</h2>
                    <a href="#">Kebijakan Privasi</a>
                    <a href="#">Term of Use</a>
                </div>
                <div className="footer-heading footer-4">
                    <h2>Kontak</h2>
                        <div className="content">
                            <div className="email">
                                <i className="fas fa-envelope"></i>
                                <span className="text">dietcare@dcare.com</span>
                            </div>
                            <div className="phone">
                                <i className="fas fa-phone fa-flip-horizontal"></i>
                                <span className="text">0877-7788-7878</span>
                            </div>
                            <div className="location">
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="text">Indonesia</span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer;