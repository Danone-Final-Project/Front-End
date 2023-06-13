import { Container, Row, Col, Image } from 'react-bootstrap';

const DietTiga = () => {
    
    return (
        <div className='img-fluid'>
        <Container className="diet-satu">
            <Row>
                <Col>
                    <Image className='img-fluid' src="https://img.freepik.com/free-vector/carb-cycling-abstract-illustration_335657-5250.jpg?size=626&ext=jpg&ga=GA1.1.696200391.1683087027&semt=robertav1_2_sidr" fluid />
                </Col>
            </Row>
        </Container>
        <div className="judulsatu">
        <h1>Diet Mayo</h1>
            <div className="judulsatudua">
                <p>Diet mayo adalah metode diet yang dirancang oleh Mayo Clinic, sebuah organisasi medis non-profit asal Amerika Serikat. Tak hanya untuk menurunkan berat badan, diet ini juga mendukung perubahan gaya hidup menjadi lebih sehat secara bertahap dan berkelanjutan.</p>
                <p>Salah satu fokus utama dari diet ini adalah berfokus pada perubahan perilaku. Seperti tidak makan sambil menonton televisi atau meningkatkan asupan buah dan sayuran yang kamu makan dalam sehari, untuk membantu menurunkan berat badan dan mempertahankannya.</p>

                <h2>Tujuan Diet Mayo</h2>
                <p>Tujuan dari diet mayo adalah untuk membantu menurunkan berat badan berlebih, dan menemukan cara makan yang lebih sehat. Tak hanya untuk saat ini, tapi juga untuk dipertahankan seumur hidup.</p>

                <p>Diet ini didasarkan pada ilmu perubahan perilaku, yang akan membantu menemukan motivasi batin, untuk menurunkan berat badan. Ini juga dapat membantu menetapkan tujuan yang dapat dicapai, dan belajar menangani kemunduran.</p>

                <h2>Manfaat Diet Mayo</h2>
                <p>Manfaat terbesar dari diet mayo adalah tentang membuat perubahan perilaku sehat, alih-alih menghitung kalori atau zat gizi makro. Salah satu alasan diet tidak berhasil adalah begitu orang berhenti membatasi makanan tertentu dan melanjutkan perilaku pra-diet, berat badan akan naik kembali. Untuk itu, diet ini berfokus untuk mempertahankan perubahan perilaku untuk kesehatan</p>
            </div>
        </div>
        </div>
    )
};

export default DietTiga;