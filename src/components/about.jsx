function About (){
  return(
    <section className="my-5 about" id="about">
        <div className="max-width">
            <div>
                <h2 className="title">Apa itu D’care</h2>
                    <p className="content">D’care adalah website untuk membantu kamu menjaga kesehatan mu! <b>D’care</b> hadir dengan fitur kalkulator BMI dan BMR yang dapat membantu kamu dalam menghitung berat ideal dan juga jumlah asupan kalori yang ideal sesuai tubuh mu!<span>*</span></p>
                    <p className="content-info"><span>*</span>Untuk kebutuh gizi yang sesuai silahkan berkonsultasi bersama ahli gizi.</p>
                <div className="card-masuk">
                    <div className="box">
                        <p>Silahkan masuk ke akun untuk memanfaatkan fitur yang kami berikan</p>
                        <a className="menu-btn" href="#masuk">Masuk</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default About;