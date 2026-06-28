import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert, Row, Col } from 'react-bootstrap';

// ==========================================
// COMPONENT CON: Hiển thị chi tiết từng câu hỏi (như Lab 4)
// ==========================================
function QuestionItem({ data, index, selectedAnswer, onSelectAnswer, showResult }) {
    return (
        <Card className="mb-4 border-light-subtle shadow-sm" style={{ borderRadius: '8px' }}>
            <Card.Header className="bg-white border-bottom-0 pt-3 fw-bold text-secondary" style={{ fontSize: '0.95rem' }}>
                QUESTION {index + 1}
            </Card.Header>
            <Card.Body className="pt-1 pb-4">
                <Card.Title className="mb-3 text-dark" style={{ fontSize: '1.15rem', fontWeight: '500' }}>
                    {data.question}
                </Card.Title>
                <Form>
                    <Row>
                        {data.options.map((option, idx) => {
                            // Xử lý đổi màu nền để hiển thị đáp án đúng/sai sau khi nộp bài
                            let isCorrect = option === data.correctAnswer;
                            let isSelected = option === selectedAnswer;
                            let bgStyle = {};

                            if (showResult) {
                                if (isCorrect) bgStyle = { backgroundColor: '#d1e7dd', borderRadius: '4px' }; // Xanh lá nếu đúng
                                else if (isSelected && !isCorrect) bgStyle = { backgroundColor: '#f8d7da', borderRadius: '4px' }; // Đỏ nếu chọn sai
                            }

                            return (
                                <Col md={6} key={idx} className="my-1 py-1" style={bgStyle}>
                                    <Form.Check
                                        type="radio"
                                        id={`q-${data.id}-opt-${idx}`}
                                        label={option}
                                        name={`question-${data.id}`}
                                        checked={isSelected}
                                        disabled={showResult} // Khóa không cho chọn lại sau khi nộp bài
                                        onChange={() => onSelectAnswer(data.id, option)}
                                        className="py-2 px-3 align-items-center"
                                        style={{ cursor: showResult ? 'not-allowed' : 'pointer' }}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
}

// ==========================================
// COMPONENT CHA: Quản lý danh sách và trạng thái bài trắc nghiệm
// ==========================================
function Quiz() {
    // Mảng dữ liệu lưu thông tin câu hỏi và tùy chọn 
    const quizQuestions = [
        {
            id: 1,
            question: 'Thành phần nào trong React Router được dùng để định nghĩa các tuyến đường (routes)?',
            options: ['<Routes>', '<Navbar>', '<Link>', '<Container>'],
            correctAnswer: '<Routes>'
        },
        {
            id: 2,
            question: 'Để chuyển trang trong React Router mà không làm tải lại toàn bộ trình duyệt, ta dùng thẻ nào?',
            options: ['<a>', '<Link>', '<Href>', '<Router>'],
            correctAnswer: '<Link>'
        },
        {
            id: 3,
            question: 'Thư viện React Bootstrap cung cấp thuộc tính nào để tích hợp thẻ điều hướng với React Router?',
            options: ['href={Link}', 'as={Link}', 'to={Link}', 'route={Link}'],
            correctAnswer: 'as={Link}'
        },
        {
            id: 4,
            question: 'Trong React, hook nào được sử dụng phổ biến nhất để quản lý trạng thái (state) dữ liệu?',
            options: ['useEffect', 'useContext', 'useState', 'useReducer'],
            correctAnswer: 'useState'
        }
    ];

    // Lưu trữ các câu trả lời do người dùng chọn dưới dạng key-value { questionId: selectedOption }
    const [userAnswers, setUserAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    // Hàm xử lý khi người dùng chọn một đáp án
    const handleSelectAnswer = (questionId, option) => {
        setUserAnswers({
            ...userAnswers,
            [questionId]: option
        });
    };

    // Hàm tính điểm và hiển thị kết quả
    const handleSubmitQuiz = () => {
        let currentScore = 0;
        quizQuestions.forEach((q) => {
            if (userAnswers[q.id] === q.correctAnswer) {
                currentScore += 1;
            }
        });
        setScore(currentScore);
        setSubmitted(true);
    };

    // Làm lại bài quiz từ đầu
    const handleResetQuiz = () => {
        setUserAnswers({});
        setSubmitted(false);
        setScore(0);
    };

    return (
        <Container fluid className="px-4 mt-3 pb-5">
            <h2 className="mb-4 text-dark" style={{ fontWeight: '500' }}>Online Quiz Application</h2>

            {/* Hiển thị bảng điểm tổng quát sau khi nhấn nút nộp bài */}
            {submitted && (
                <Alert variant={score === quizQuestions.length ? 'success' : 'info'} className="mb-4 shadow-sm">
                    <Alert.Heading>Kết quả bài làm của bạn!</Alert.Heading>
                    <p className="mb-2">
                        Bạn đã trả lời đúng <strong>{score}/{quizQuestions.length}</strong> câu hỏi.
                    </p>
                    <Button variant="outline-dark" size="sm" onClick={handleResetQuiz}>Làm Lại Bài</Button>
                </Alert>
            )}

            {/* Map qua mảng câu hỏi và truyền dữ liệu vào Component con  */}
            {quizQuestions.map((question, index) => (
                <QuestionItem
                    key={question.id}
                    data={question}
                    index={index}
                    selectedAnswer={userAnswers[question.id]}
                    onSelectAnswer={handleSelectAnswer}
                    showResult={submitted}
                />
            ))}

            {/* Nút điều khiển */}
            {!submitted ? (
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleSubmitQuiz}
                    disabled={Object.keys(userAnswers).length === 0}
                    className="px-4 shadow-sm"
                >
                    Submit Quiz
                </Button>
            ) : (
                <Button variant="secondary" size="lg" onClick={handleResetQuiz} className="px-4 shadow-sm">
                    Reset Quiz
                </Button>
            )}
        </Container>
    );
}

export default Quiz;