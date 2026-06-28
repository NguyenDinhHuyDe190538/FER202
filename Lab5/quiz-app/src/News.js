import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const newLists = [
    { id: 1, title: 'Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition', description: '“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.', images: 'images/event-1.jpg' },
    { id: 2, title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', images: 'images/event-2.jpg' },
    { id: 3, title: 'Burger King is testing a new breakfast sandwich', description: 'This is a win for the flatbread fans.', images: 'images/event-3.jpg' },
    { id: 4, title: 'Popeyes permanently adds chicken wings to its menu', description: 'And you can get ’em in five different flavors.', images: 'images/event-4.jpg' },
    { id: 5, title: 'Top salmon with a sizzling mix of aromatics and spices', description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', images: 'images/event-5.jpg' },
    { id: 6, title: '80 Christmas dinner ideas for the ultimate holiday feast', description: 'Build the perfect Christmas menu with these delicious recipes.', images: 'images/event-6.jpg' },
    { id: 7, title: 'How to make the easiest prime rib roast for the holidays', description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', images: 'images/event-7.jpg' },
    { id: 8, title: 'Turn leftover turkey into a flavorful Waldorf salad', description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', images: 'images/event-8.jpg' },
];

function News() {
    return (
        <Container fluid className="px-4 mt-3">
            <h2 className="mb-4" style={{ color: '#b92c43', fontSize: '2.2rem', fontWeight: '500' }}>News Category</h2>
            <Row>
                {newLists.map((news) => (
                    <Col lg={3} md={4} sm={6} key={news.id} className="mb-4 d-flex align-items-stretch">
                        <Card className="w-100 border border-light-subtle shadow-sm" style={{ borderRadius: '6px' }}>
                            <Card.Img
                                variant="top"
                                src={news.images}
                                style={{ height: '240px', objectFit: 'cover', borderRadius: '6px 6px 0 0' }}
                            />
                            <Card.Body className="d-flex flex-column justify-content-between p-3">
                                <div>
                                    <Card.Title style={{ fontSize: '1.1rem', fontWeight: '500', color: '#212529', lineHeight: '1.4' }}>
                                        {news.title}
                                    </Card.Title>
                                    <Card.Text className="text-secondary mt-3" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                                        {news.description}
                                    </Card.Text>
                                </div>
                                {/* Đường dẫn màu xanh lặp lại tiêu đề có gạch chân đúng mẫu */}
                                <div className="mt-3">
                                    <a href={`#news-${news.id}`} className="text-primary d-inline-block" style={{ fontSize: '0.9rem', textDecoration: 'underline' }}>
                                        {news.title}
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default News;