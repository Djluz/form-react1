import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './App.css';

function App() {
  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center p-3 w-100">
        <img className="mb-4 logo" 
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/SQUARE-LOGOS.jpg?auto=format&q=60&w=1860&h=1860&fit=crop&crop=faces"
              alt="login" />
        <h1 className="mb-3 fs-3 fw-normal">Please log in..</h1>
        <Form.Group controlId="sign-in-email-address">
          <Form.Control type="email" size="lg" placeholder="Enter your email" autoComplete="username" className="position-relative" />
        </Form.Group><br></br>
        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Control type="password" size="lg" placeholder="Enter your password" autoComplete="current-password" className="position-relative" />
        </Form.Group><br></br>
        <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
          <Form.Check label="Remember me" />
        </Form.Group>
        <div className="d-grid">
          <Button onClick={() => alert('You are logged in!')} variant="dark" size="lg">Log in</Button>
        </div>
        <p className="mt-5 text-muted">&copy; 2021-2022</p>
      </Form>
    </Container>
  );
}

export default App;