import { Container, Row, Col, Image } from 'react-bootstrap';

const DietSatu = () => {
    return (
        <div className='img-fluid'>
        <Container className="diet-satu">
            <Row>
                <Col>
                    <Image className='img-fluid' src="https://img.freepik.com/free-vector/macronutrients-flat-composition-with-bunch-products-containing-proteins-such-as-raw-meat-eggs-mushrooms-vector-illustration_1284-81305.jpg?size=626&ext=jpg&ga=GA1.2.696200391.1683087027&semt=robertav1_2_sidr" fluid />
                </Col>
            </Row>
        </Container>
        <div className="judulsatu">
            <h1>Diet Tinggi Protein</h1>
            <div className="judulsatudua">
                <p>Protein merupakan zat yang sangat penting yang dibutuhkan oleh tubuh. Zat gizi ini terdapat di hampir seluruh jaringan tubuh dan menjadi zat pembangun tubuh. Berbagai peran penting yang dilakukan protein dalam tubuh di antaranya adalah untuk menunjang pertumbuhan, pembentukan sistem kekebalan tubuh, hormon, enzim, dan berbagai jaringan tubuh lain. Berbagai prinsip diet banyak yang menganjurkan untuk mengonsumsi protein yang tinggi dan mengurangi karbohidrat. Selain itu, protein dianggap dapat menahan rasa lapar lebih lama. </p>

                <h2>Tujuan Diet Tinggi Protein</h2>
                <p>Terdapat dua jenis tipe diet tinggi protein, yaitu diet yang disertai dengan pembatasan karbohidrat dan digantikan dengan protein, dan diet yang menggantikan seluruh kebutuhan karbohidrat dengan protein. Diet tinggi protein biasanya menghabiskan 25 hingga 35 persen dari total kalori dalam sehari. Sedangkan yang tubuh kita butuhkan hanya sekitar 10 sampai 15 persen protein dari total kalori sehari. Menurut ketentuan Kementerian Kesehatan tentang angka kecukupan gizi, kebutuhan protein normal yang harus dipenuhi setiap harinya adalah sebesar 62 hingga 65 gram untuk laki-laki dan 56 hingga 57 untuk perempuan usia dewasa, atau sebanyak 0,8-1,0 gram per kg berat badan per hari.</p>
                <h2>Manfaat Diet Tinggi Protein</h2>
                <p>Tahukah kamu bahwa otak, tepatnya area yang disebut hipotalamus, berperan besar dalam mengatur berat badan kamu. Organ vital tersebut memproses berbagai jenis informasi untuk menentukan kapan kamu harus makan dan seberapa banyak jumlah makanan yang perlu kamu makan untuk merasa kenyang. Beberapa sinyal penting yang dikirim ke otak adalah perubahan hormon sebagai respons untuk mengonsumsi makanan.

                Nah, meningkatkan asupan protein dapat meningkatkan kadar hormon kenyang (pengurang napsu makan) GLP-1, peptidpeptiden kadar kolesistokinin, sekaligus mengurangi kadar hormon lapar, yaitu ghrelin. Berkurangnya rasa lapar membuat kamu makan lebih sedikit kalori secara otomatis. Hal ini yang membuat diet tinggi protein dapat mengurangi berat badan.</p>
            </div>
        </div>

        </div>
    );
};

export default DietSatu;