import { Container, Row, Col, Image } from 'react-bootstrap';

const DietLima = () => {
    
    
    return (
        <div className='img-fluid'>
        <Container className="diet-satu">
            <Row>
                <Col>
                    <Image className='img-fluid' src="https://img.freepik.com/free-vector/eating-variety-foods-concept-illustration_114360-10634.jpg?size=626&ext=jpg&ga=GA1.1.696200391.1683087027&semt=robertav1_2_sidr" fluid />
                </Col>
            </Row>
        </Container>
        <div className="judulsatu">
        <h1>Diet Protein Shake</h1>
            <div className="judulsatudua">
                <p>Dilansir dari Healthline, mengonsumsi protein shake adalah cara mudah untuk menambahkan protein ke dalam menu diet Anda. Banyak orang membuktikan bahwa suplemen ini membantu penurunan berat badan.
                
                Protein shake ini berupa suplemen bubuk kering yang dicampur air untuk diminum. Anda bisa mendapatkannya di supermarket atau toko online.</p>

                <h2>Manfaat Konsumsi Protein Shake</h2>
                <p>Dilansir dari MyProtein, ada sejumlah manfaat konsumsi protein shake yang bisa Anda dapatkan. Antara lain :</p>

                <h3>1. Membantu Pertumbuhan Otot</h3>
                <p>Protein shake digunakan sebagai bahan bakar untuk membantu membangun jaringan otot. Tentunya otot dapat dibentuk dengan dibarengi latihan beban. Latihan beban tanpa asupan protein yang cukup justru akan rusak secara perlahan-lahan. Jika otot terbentuk, maka kekuatan otot pun ikut bertambah.</p>

                <h3>2. Mempertahankan Massa Otot</h3>
                <p>Protein mampu mencegah Anda kehilangan massa otot. Orang yang mengonsumsi suplemen protein cenderung tidak akan cepat kehilangan jaringan otot di masa tua.</p>

                <h3>3. Meningkatkan Metabolisme Tubuh</h3>
                <p>Protein shake dapat meningkatkan metabolisme tubuh. Dengan demikian, lemak dapat mudah terbakar.</p>

                <h2>Cara Mengkonsumsi Protein Shake</h2>
                <p>cara mengonsumsi protein shake yang paling mudah adalah dengan mencampurnya dengan air lalu diminum. Namun ada cara lainnya yang bisa Anda lakukan, misal mencampurkan dengan cairan beraroma seperti susu atau air kelapa dan mencampurnya untuk smoothie buah.

                Biasanya, produsen protein shake menyarankan penyajian sekitar 30 gram satu porsi. Waktu yang tepat untuk meminumnya ialah setelah berolahraga, yaitu ketika otot sangat membutuhkannya.</p>
            </div>
        </div>
        </div>
    );
};


export default DietLima;