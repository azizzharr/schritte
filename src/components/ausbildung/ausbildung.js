import React, { Component } from "react"
import "./ausbildung.css"
import { Container,Row,Card } from "react-bootstrap"
import ausbildung from "../pictures/ausbildung.jpg"
import ausbildung2 from "../pictures/ausbildung2.jpg"

class Ausbildung extends Component {
    render() {
        return (
            <div className="ausbildung">
                <h1 className="h1">
                    Ausbildung в Германии
</h1>
                <Container className="contain">
                    <img className="img" src={ausbildung} alt="foto" />


                    <p className="p">
                        Что такое Ausbildung?
                        </p>
                    <div data-aos="fade-right" className="zweiteDiv">
                    <div className="divaupairimg"></div>
                        <p className="p2">
                            Ausbildung – программа профессиональной подготовки и обучения.
                       <li>
                                Студент такой программы (или Auszubildender, или вкратце Azubi)
                       </li>
                            <li>
                                изучает основы профессии в классе и одновременно получает опыт
                       </li>
                            <li>
                                работы и практику на производстве. По окончании профобразования на
                       </li>
                            <li>
                                поиск работы по специальности дается год, а еще через три года
                       </li>
                            <li> можно получить ПМЖ в Германии.
                         </li>



                        </p>
                        <p className="p2">
                            Duale Ausbildung (дуальная система). В среднем Azubi проводит
                    <li>
                                на производстве около
                                3 дней в неделю и около 2 в аудитории. Здесь упор
                    </li>

                            <li>
                                делается на практику, что будет большим плюсом
                                при дальнейшем
                    </li>
                    
                    <li>
                                трудоустройстве. Обучение на
                    duale Ausbildung длится 3-4 года,
                        </li>
                        <li>
 также студент получает ежемесячную зарплату, которая растет с каждымгодом.
                        </li>
                          
                    </p>
                        <p className="p2">
                            Ежегодно в Германии предлагается более 600.000 вакансий
                            <li>на прохождение Ausbildung.
                                </li> 
                        </p>
                        <img data-aos="fade-left" className="imgausl" src={ausbildung2} alt=""/>

                    </div>
<br/>
<br/>
 <h2 className="ausbildungh2">
TРЕБОВАНИЯ:
</h2>
<br/>
                    <Row>


<Card className=" offset-lg-1 offset-md-1 ml-4 form-group" border="success" style={{ width: '18rem' }}>
    <Card.Header>Требования</Card.Header>
    <Card.Body>
        <Card.Title>- Возраст – 18-40 лет;</Card.Title>
        <Card.Text>
        - Аттестат о законченном школьном образовании (на многие специальности аусбильдунг можно подавать с аттестатом школы 9 классов!)

</Card.Text>
        <Card.Text>
        - Знания немецкого языка на уровне не ниже уровня B1! На большинство медицинских и технических специальностей
</Card.Text>
        <Card.Text>
        еобходимо владеть немецким языком на уровне не ниже B2 (и чем выше ваш уровень немецкого языка, тем соответственно лучше!)
</Card.Text>

    </Card.Body>
</Card>
<Card className="ml-4 form-group" border="primary" style={{ width: '18rem' }}>
    <Card.Header>Требования </Card.Header>
    <Card.Body>
        <Card.Title>Сроки</Card.Title>
        <Card.Text>
        Подавать документы на программу Ausbildung стоит желательно за 6-12 месяцев до начала программы. Это длительный по времени процесс! 
</Card.Text>
        <Card.Text>
        Пока работодатель получит заявки, пока их все изучит и рассмотрит, примет по всем им решения, 
</Card.Text>
        <Card.Text>
        напишет ответы, сделает и отправит вам ваш контракт на аусбильдунг, пока вы подготовите и подадите необходимые документы на визу
</Card.Text>
    </Card.Body>
</Card>

<Card className="ml-4 form-group" border="danger" style={{ width: '18rem' }}>
    <Card.Header>Внимание</Card.Header>
    <Card.Body>
        <Card.Title>Внимание для тех, кто УЖЕ находится в Германии!</Card.Title>
        <Card.Text>
        Подавать на эту программу можно находясь еще у себя на родине (в странах СНГ и т.д.), 
</Card.Text>
        <Card.Text>
        , однако гораздо проще и легче участвовать в программе тем, кто уже находится в Германии
</Card.Text>
        <Card.Text>
        (к примеру: FSJ/BFD/FOeJ, Au-Pair, Logo, Work and Trawel, Deutschkurs)).
</Card.Text>
    </Card.Body>
</Card>
</Row>



                    <div className="dritteDiv ">
                        <h2 className="h2p">
                            <br/>   <br/>
                             Подготовка документов
                        </h2>
                         <Row>
                        <div className="offset-1 form-group " >
                           
                            <h2 className="divH2 container">
                                <br/>
                            * Фотография
                            </h2>
                            <p className="divP container">
                                <li>
                                Каждому участнику необходимо выслать нам свою фотографию
                                </li>
                                <li>
                                    для отправки работодателю. Обратите внимание, что фотография
                                </li>
                                <li>
                                     очень важна при отборе студентов на работу. Когда работодатель
                                </li>
                                <li>
                                    берет в руки Вашу анкету, то половину времени взгляд 
                                </li>
                                <li>
                                      задерживается именно на Вашей фотографии, и уже только потом
                                </li>
                                <li>
                                на тексте. Вам нужно отнестись к выбору Вашей фотографии очень 

                                </li>
                                <li>серьезно.
                                    </li>
                            </p>

                        </div>

                        <div className="offses-1">
                            <h2 className="divH2 container">
                                <br/>
                                * Видео презентация
                            </h2>
                            <p className="divP container">
                                <li>
                                Видео презентация — немецкие предприятия всегда относятся к
                                </li>
                                <li>
                                сотрудникам с уважением и личный контакт всегда очень важен в
                                </li>
                                <li>
                                работе. Работодатель хотел бы иметь хотя бы небольшое
                                </li>
                                <li>
                                впечатление о Вас как о своем потенциальном сотруднике еще до
                                </li>
                                <li>
                                того, как Вы приедете к нему на работу. Именно Ваша короткая
                                </li>
                                <li>
                                видео презентация поможет работодателю немного

                                </li>
                                <li>познакомиться с Вами.
                                    </li>
                            </p>
                        </div>
                        </Row>
                        <Row>
                        <div className="offset-1 form-group " >
                            <h2 className="divH2 container">
                                <br/>
                                * Заграничный паспорт
                            </h2>
                            <p className="divP container">
                                <li>
                                Вам нужно прислать отсканированную страницу заграничного
                                </li>
                                <li>
                                паспорта, где размещена Ваша фотография. Если у Вас нет на
                                </li>
                                <li>
                                данный момент заграничного паспорта, это не проблема, вы
                                </li>
                                <li>
                                можете также принимать участие в программе, и параллельно
                                </li>
                             
                                <li>оформлять заграничный паспорт.
                                    </li>
                            </p>
                        </div>
                   
                        <div className="offses-1" >
                            <h2 className="divH2  container">
                                <br/>
                                * Договор
                            </h2>
                            <p className="divP container">
                                <li>
                                Вам необходимо прислать нам отсканированный оригинал
                                </li>
                                <li>
                                документа подписанного договора а сотрудничестве Немецкая
                                </li>
                                <li>
                                Академия «Erste Schritte».
                                </li>
                              
                            </p>
                        </div>
                   </Row>
                   
                    </div>
                </Container>
               
            </div>
        )
    }
}

export default Ausbildung;