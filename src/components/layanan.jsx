import { Link } from "react-router-dom";
import fotoBMI from "./../../images/fotoBMI.png"

function Layanan (){
  return(
    <section className="mb-5 about" id="layanan">  
      <div className="max-width">
        <h2 className="title">Layanan</h2>
        <p className="mb-5 content">Hitung berat ideal mu menggunakan kalkulator BMI (Body Mass Index)</p>
        <div>
          <Link className='navlink' to="/bmi">
            <a href="bmi.html" className="card-layanan">
              <img src={fotoBMI} alt="Kalkulator BMI" />
              <div className="content">
                <h2>Kalkulator BMI</h2>
                <p>Tentukan kategori tubuhmu berdasarkan tinggi dan berat badan.</p>
              </div>
            </a>
          </Link>
        </div>                
      </div>
    </section>
  )
}
export default Layanan;