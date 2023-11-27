import { Col, Row } from "reactstrap"
import CarouselInicio from "../components/CarouselInicio"
import ItemCardapio from "../components/ItemCardapio"

function Home() {
    return(
        <div>
            <Row>
                <Col>
                    {/* Carousel */}
                    <CarouselInicio />
                </Col>
            </Row>
            <Row>
                <Col className="text-center my-3">
                    <h1>Mais pedidos</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ItemCardapio />
                </Col>
                <Col>

                </Col>
                <Col>

                </Col>
                <Col>

                </Col>
            </Row>
        </div>
    )
}

export default Home