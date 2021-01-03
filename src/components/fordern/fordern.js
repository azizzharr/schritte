import React, { Component } from "react"
import "./fordern.css"
import { ListGroup, Row } from "react-bootstrap"

class Fordern extends Component {
    render() {
        return (
            <div>
                <br />
                <h1 className="h1Fordern">
                    TРЕБОВАНИЯ:
        </h1>
                <ListGroup>
                    <ListGroup.Item variant="secondary" className="form-group">
                        Быть студентом очного отделения факультета экономики, менеджмента, бизнес управления, туризма, пищевой инженерии и агрономии.

</ListGroup.Item>
                    <ListGroup.Item variant="secondary" className="form-group">
                        Быть на 2,3,4 курсе бакалавра или же 1 курса магистратуры на одном из вышеуказанных факультетов

</ListGroup.Item>
                    <ListGroup.Item variant="secondary" className="form-group">
                        Владеть немецким на уровне В1 и выше

</ListGroup.Item>
                    <ListGroup.Item variant="secondary" className="form-group">
                        Если не владеете немецким готовность интенсивно учить на наших курсах

</ListGroup.Item>

                </ListGroup>
                <h1 className="h1Fordern">
                    ВЫ ПОЛУЧИТЕ:
        </h1>
                <ListGroup>
                    <Row>


                        <ListGroup.Item variant="warning" className="form-group col-lg-6 col-md-6">
                            Бесценный опыт по специальности в Германии

</ListGroup.Item>
                        <ListGroup.Item variant="warning" className="form-group col-lg-6 col-md-6">
                            Жильё, питание и страховку
</ListGroup.Item>
                        <ListGroup.Item variant="warning" className="form-group col-lg-6 col-md-6">
                            Отличный учебный процесс, который состоит из 30% теории и 70% практики
</ListGroup.Item>
                        <ListGroup.Item variant="warning" className="form-group col-lg-6 col-md-6">
                            от 9,49 € за час практики
</ListGroup.Item>
                        <ListGroup.Item variant="warning" className="form-group col-lg-6 col-md-6">

                            Возможность путешествовать по Европе
</ListGroup.Item>
                        <ListGroup.Item variant="warning" className="form-group col-lg-6 col-md-6">

                        Ежемесячную зарплату от 1200 € - 2000 €
                       </ListGroup.Item>

                    </Row>
                </ListGroup>
            </div>
        )
    }
}

export default Fordern;