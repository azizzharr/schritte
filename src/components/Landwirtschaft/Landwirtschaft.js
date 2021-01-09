import React,{Component} from "react"
import { Container,Card,Jumbotron ,Row} from "react-bootstrap"
import "./Landwirtschaft.css"
import land1 from "../pictures/land1.jpg"   
import land2 from "../pictures/land2.jpg"    
import land3 from "../pictures/land3.jpg"    
import land4 from "../pictures/land4.jpg"    
import land5 from "../pictures/land5.jpg"    
import land6 from "../pictures/land6.jpg"    


class Landwirtschaft extends Component{
    render(){
        return(
    <div>
        <br/>
        <Container>
<Jumbotron className="landjumb" >
                        <div className="mt2">

                        </div>
                        

                        <span className="landtext" > Трудоустройство   Земледелие В Германии </span>
                        <br />
                        <span className="landtitle" > 
                        Для гражданов СНГ

                        </span>
                      
                         
                    </Jumbotron>
                   
                   

                    
                    <Row>


  <Card className="card18 col-lg-4 col-md-6 col-sm-6 form-group">
  <Card.Img className="imgvakansy"  variant="top" src={land1} />
  <Card.Body>
    <Card.Title>сельское хозя́йство </Card.Title>
    <Card.Text>
    Обязанности
Сбор урожая спаржи в поле
Другие работы в поле
Требования
Требуются парни и девушки
Требуются кандидаты со знанием английского языка на уровне                     Pre-Intermediate (2 на группу), кандидаты со знанием немецкого языка на уровне А1 (1 на группу), а также кандидаты без знания языков

    </Card.Text>
  </Card.Body>
  <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
</Card>


  <Card className="card18 col-lg-4 col-md-6 col-sm-6 form-group ">
    <Card.Img className="imgvakansy" variant="top" src={land2} />
    <Card.Body>
      <Card.Title>сельское хозя́йство </Card.Title>
      <Card.Text>
      Сельское хозяйство Германии имеет успех. 70% сельскохозяйственной продукции – это животноводство, потребности которого обеспечивает растениеводство. В животноводстве основную роль играет скотоводство. На него приходится 40%
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>
  



  <Card  className="card18 col-lg-4 col-md-6 col-sm-6 form-group ">
    <Card.Img className="imgvakansy" variant="top" src={land3} />
    <Card.Body>
      <Card.Title>сельское хозя́йство </Card.Title>
      <Card.Text>
      Вакансия только для студентов сельско-хозяйственных ВУЗов
Физическая выносливость, готовность к кропотливому трудуОтветственность, честность, порядочность
Старательность, надежность, мотивация
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>



<br/>
  <Card className="card18 col-lg-4 col-md-6 col-sm-6 form-group ">
    <Card.Img className="imgvakansy" variant="top" src={land4} />
    <Card.Body>
      <Card.Title> сельское хозя́йство 
</Card.Title>
      <Card.Text>
      Обязанности
Сбор урожая спаржи в поле
Другие работы в поле
Требования
Требуются парни и девушки
Требуются кандидаты со знанием английского языка на уровне                     Pre-Intermediate (2 на группу), кандидаты со знанием немецкого языка на уровне А1 (1 на группу), а также кандидаты без знания языков


      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>







  <Card className="card18 col-lg-4 col-md-6 col-sm-6 form-group "> 
    <Card.Img className="imgvakansy" variant="top" src={land5} />
    <Card.Body>
      <Card.Title>сельское хозя́йство </Card.Title>
      <Card.Text>
      Германии сельское хозяйство выполняет дополнительные задачи, значение которых постоянно возрастает. Это сохранение и защита природных основ жизни, охрана привлекательных ландшафтов для жилых районов, расселения, размещения экономики
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>


  
  <Card className="card18 col-lg-4 col-md-6 col-sm-6 form-group ">
    <Card.Img className="imgvakansy" variant="top" src={land6} />
    <Card.Body>
      <Card.Title>сельское хозя́йство </Card.Title>
      <Card.Text>
      Сельское хозяйство Германии имеет успех. 70% сельскохозяйственной продукции – это животноводство, потребности которого обеспечивает растениеводство. В животноводстве основную роль играет скотоводство. На него приходится 40%
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>
</Row>
                  
                 

</Container>
    </div>
        )
    }
}

export default Landwirtschaft;