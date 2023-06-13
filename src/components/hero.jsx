import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Hero (){
  return(  
    <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Diet Sehat,</div>
                <div className="text-2">Gizi Seimbang</div>
                <div className="text-3">Diet sesuai pola makan untuk memenuhi angka kebutuhan gizi dan dapatkan tubuh ideal mu. Pilih makanan sehatmu dan control diet-mu sekarang dengan Healthy Care. Solusi Cerdas Diet Gizi seimbang!</div>
                <Link className='navlink' to="/bmi">Check BMI</Link>
            </div>
        </div>
    </section>
  )
}
export default Hero;