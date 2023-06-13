function Layanan (){
  return(
    <section class="layanan" id="layanan">  
            <div class="max-width">
                <h2 class="title">Layanan</h2>
                <p class="content">Hitung berat ideal mu menggunakan kalkulator BMI (Body Mass Index)</p>
                <div class="card-container">
                  <a href="bmi.html" class="card">
                    <img src="images/fotoBMI.png" alt="Kalkulator BMI" />
                    <div class="content">
                      <h2>Kalkulator BMI</h2>
                      <p>Tentukan kategori tubuhmu berdasarkan tinggi dan berat badan.</p>
                    </div>
                  </a>
                  <a href="bmr.html" class="card">
                    <img src="images/fotoBMR.png" alt="Kalkulator BMR" />
                    <div class="content">
                      <h2>Kalkulator BMR</h2>
                      <p>Hitung jumlah asupan kalori yang ideal dan jumlah kalori yang sudah masuk.</p>
                    </div>
                  </a>
                </div>                
            </div>
    </section>
  )
}
export default Layanan;