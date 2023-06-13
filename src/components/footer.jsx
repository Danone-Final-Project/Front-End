function Footer (){
  return(
    <footer>
      <div class="column left"> 
          <div class="text">Butuh informasi tentang diet? D’care solusinya!</div>
          <p>Informasi dan alat bantuan untuk diet yang bisa kamu dapatkan dari rumah!</p>
      </div>
      <div class="column right">
          <div class="footer-container">
              <div class="footer-heading footer-1">
                  <h2>Navigasi</h2>
                  <a href="#">Beranda</a>
                  <a href="#">Body Mass Index</a>
                  <a href="#">Kalkulator BMI</a>
                  <a href="#">Kalkulator BMR</a>
              </div>
              <div class="footer-heading footer-2">
                  <h2>Komunitas</h2>
                  <a href="#">Tentang Kita</a>
                  <a href="#">Pengembang</a>
                  <a href="#">Blog</a>
              </div>
              <div class="footer-heading footer-3">
                  <h2>Lainnya</h2>
                  <a href="#">Kebijakan Privasi</a>
                  <a href="#">Term of Use</a>
              </div>
              <div class="footer-heading footer-4">
                  <h2>Kontak</h2>
                      <div class="content">
                          <div class="email">
                              <i class="fas fa-envelope"></i>
                              <span class="text">dietcare@dcare.com</span>
                          </div>
                          <div class="phone">
                              <i class="fas fa-phone fa-flip-horizontal"></i>
                              <span class="text">0877-7788-7878</span>
                          </div>
                          <div class="location">
                              <i class="fas fa-map-marker-alt"></i>
                              <span class="text">Indonesia</span>
                          </div>
                      </div>
              </div>
          </div>
      </div>
  </footer>
  )
}
export default Footer;