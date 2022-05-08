import React from 'react'
import { Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <div style={{  width: 1500, padding: 40 }}>
        <Row>
            <Col><img src="/img1.jpg" alt="logo" style={{ width: 550, height:300}} /> </Col>
            <Col> 
                <h1 className="title red">Naima Chokri</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, a. Labore repudiandae hic deleniti, culpa illum dolorem repellat! Magnam, modi quo eum adipisci non reiciendis. Laboriosam, excepturi quae accusamus libero eius tempora sapiente aperiam necessitatibus harum fugiat. Qui debitis voluptatem, voluptatibus, asperiores consectetur ullam fuga facere recusandae dolorum eligendi deleniti rerum atque dolore! Perferendis minus deserunt doloremque consequatur iusto, quod, possimus ea error quia animi quae, dolorem aperiam voluptatem corporis non quaerat deleniti autem. Pariatur, delectus possimus cupiditate sunt necessitatibus, earum corrupti aperiam nulla dolores, eius nam aliquid maiores fuga maxime? Quam placeat reiciendis labore nemo facere ea dicta veritatis?</p>
            </Col>
        </Row>
        <br />
       
        
    </div>
  )
}

export default Header