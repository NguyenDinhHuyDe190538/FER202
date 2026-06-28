import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

function Home() {
    // Danh sách 6 ảnh tròn hiển thị phía dưới Slide
    const circleImages = [
        'images/event-1.jpg',
        'images/event-2.jpg',
        'images/event-3.jpg',
        'images/event-4.jpg',
        'images/event-5.jpg',
        'images/event-6.jpg'
    ];

    return (
        <Container fluid className="px-4 mt-2">
            {/* Slide ảnh đồ ăn lớn - Đã sửa cố định chiều cao không bị tràn màn hình */}
            <Carousel indicators={true} nextLabel="" prevLabel="" variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/event-6.jpg"
                        alt="Celebration Ham Slide"
                        style={{
                            height: '400px',          /* Giới hạn chiều cao cố định của slide */
                            objectFit: 'cover',       /* Giúp ảnh tự động cắt gọn, không bị méo hay giãn hình */
                            objectPosition: 'center'  /* Giữ tâm ảnh luôn ở giữa khung hình */
                        }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/event-7.jpg"
                        alt="Second Slide"
                        style={{
                            height: '400px',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                    />
                </Carousel.Item>
            </Carousel>

            {/* Hàng chứa 6 danh mục hình tròn */}
            <Row className="mt-4 justify-content-center text-center gx-5">
                {circleImages.map((imgUrl, index) => (
                    <Col xs={4} md={2} key={index} className="d-flex justify-content-center mb-3">
                        <div
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '2px solid #555',
                                boxShadow: '0px 2px 5px rgba(0,0,0,0.2)'
                            }}
                        >
                            <img
                                src={imgUrl}
                                alt={`category-${index}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Dòng chữ tiêu đề màu đỏ đặc trưng */}
            <h1 className="mt-4 ps-2" style={{ color: '#b92c43', fontWeight: '500', fontSize: '2.2rem' }}>
                This is Home Page
            </h1>
        </Container>
    );
}

export default Home;