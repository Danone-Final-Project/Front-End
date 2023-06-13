import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Hero (){
  return(
    // <>
    //   <div className="m-5 hero">
    //     <h1 className="fw-bold hero-heading mb-3">
    //       Diet Sehat, <br/>Gizi Seimbang
    //     </h1>
    //     <p className="fs-5 fw-medium">
    //       Diet sesuai pola makan untuk memenuhi angka kebutuhan gizi dan dapatkan tubuh ideal mu. Pilih makanan sehatmu dan control diet-mu sekarang dengan Healthy Care. Solusi Cerdas Diet Gizi seimbang!
    //     </p>
    //     <Button><Link className='navlink' to="/bmi">Check BMI</Link></Button>
    //   </div>
      
    // </>
    
    <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Diet Sehat,</div>
                <div class="text-2">Gizi Seimbang</div>
                <div class="text-3">Diet sesuai pola makan untuk memenuhi angka kebutuhan gizi dan dapatkan tubuh ideal mu. Pilih makanan sehatmu dan control diet-mu sekarang dengan Healthy Care. Solusi Cerdas Diet Gizi seimbang!</div>
                <Link className='navlink' to="/bmi">Check BMI</Link>
            </div>
        </div>
    </section>
  )
}
export default Hero;