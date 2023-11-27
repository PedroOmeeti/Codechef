import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/Menu';
import Rodape from './components/Rodape';
import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import Contato from './pages/Contato';

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        
        <Row>
          <Col>
            {/* NavBar */}
            <Menu />
          </Col>
        </Row>
      
        <Row>
            {/* Aqui vai ser o conteúdo */}
            <Col>
              <Routes>
                <Route exact path="/" element={<Home />}/> 
                <Route path="/cardapio" element={<Cardapio />}/> 
                <Route path="/contato" element={<Contato />}/> 
               


              </Routes>
            </Col>
        </Row>
      

      </BrowserRouter>
        <Row>
            {/* Rodapé */}
            <Rodape />
        </Row>
      
      
      
      
  
    </Container>
  );
}

export default App;
