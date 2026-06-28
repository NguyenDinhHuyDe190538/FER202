import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();

    return (
        <Container fluid className="px-4 mt-4">
            <Card className="p-5 border-0 bg-light rounded-3 shadow-sm">
                <Row className="align-items-center">
                    <Col md={8}>
                        <h1 className="display-4 fw-bold text-dark mb-3">About Our Platform</h1>
                        <p className="lead text-secondary mb-4">
                            Chào mừng bạn đến với nền tảng kiểm tra kiến thức trực tuyến kết hợp cập nhật tin tức ẩm thực hàng ngày.
                            Ứng dụng được xây dựng nhằm tối ưu hóa trải nghiệm học tập và giải trí của người dùng.
                        </p>
                        <hr className="my-4" />
                        <h5 className="fw-bold text-dark mb-3">Tính năng cốt lõi:</h5>
                        <ul className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                            <li><strong>Hệ thống Trắc nghiệm:</strong> Bộ câu hỏi đa dạng, giao diện trực quan và chấm điểm tức thì.</li>
                            <li><strong>Bản tin Ẩm thực:</strong> Cập nhật liên tục các xu hướng, công thức nấu ăn mới nhất trên thế giới.</li>
                            <li><strong>Xác thực thông tin:</strong> Form liên hệ tích hợp hệ thống kiểm tra dữ liệu đầu vào chuẩn xác.</li>
                        </ul>
                        <Button variant="primary" size="lg" onClick={() => navigate('/quizzes')}>
                            Thử Thách Quiz Ngay
                        </Button>
                    </Col>
                    <Col md={4} className="d-none d-md-block text-center">
                        <img
                            src="images/event-5.jpg"
                            alt="About illustration"
                            className="img-fluid rounded-circle shadow"
                            style={{ width: '280px', height: '280px', objectFit: 'cover' }}
                        />
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default About;