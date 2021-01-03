import React,{Component} from "react"
import {Card,CardDeck} from "react-bootstrap"
import "./vakansy.css"

class Vakansy extends Component{
    render(){
        return(
    <div>
        <br/>
        <h1>
   
        НАШИ ВАКАНСИИ
   </h1>
   <br/>
   <CardDeck>
  <Card>
    <Card.Img className="imgvakansy" variant="top" src="https://eda.yandex/images/1368744/6a5ad1bf2109cf948df0780d94c3e5ba-1100x825.jpeg" />
    <Card.Body>
      <Card.Title>Burger King</Card.Title>
      <Card.Text>
      Компания "Бургер Кинг, основанная в 1954 году, является второй по величине сетью быстрого питания в мире. Во всех Бургер Кингах ротационная система работа на кассе и кухне.


      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="imgvakansy" variant="top" src="https://sibdepo.ru/wp-content/uploads/2019/04/IMG_3036.jpg?x27991" />
    <Card.Body>
      <Card.Title>McDonald's</Card.Title>
      <Card.Text>
      McDonald’s Corporation — американская корпорация, до 2010 года крупнейшая в мире сеть ресторанов быстрого питания. Во всех McDonald’s ротационная система - работа на кассе и кухне.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="imgvakansy" variant="top" src="https://regnum.ru/uploads/pictures/news/2015/12/01/regnum_picture_1448967724514457_normal.jpg" />
    <Card.Body>
      <Card.Title>Отели и Рестораны</Card.Title>
      <Card.Text>
      Предоставляется работа в отелях и ресторанах Германии. Вакансии :официанты, кассиры, помощники на кухне, горничные.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>
</CardDeck>
<br/>
<CardDeck>
  <Card>
    <Card.Img className="imgvakansy" variant="top" src="https://avatars.mds.yandex.net/get-zen_doc/27036/pub_5c7ba1e029edf000af3ccb3c_5c7ba44faa86a600b2b13443/scale_1200" />
    <Card.Body>
      <Card.Title>Парки развлечений</Card.Title>
      <Card.Text>
      Парки развлечений Работа в парках развлечений очень увлекательная и есть возможность бесплатно кататься на аттракционах. Предоставляются вакансии: касса, помощники на кухне, горничные в отелях, продавцы мороженого и все, что связано с парками развлечений. 

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="imgvakansy" variant="top" src="https://storge.pic2.me/c/1360x800/561/3D_Commercial_Architectural_Renderings_3D_Architecture_imges_7013.jpg" />
    <Card.Body>
      <Card.Title>Торговые центры</Card.Title>
      <Card.Text>
      Работа в торговых центрах очень легкая и интересная. Вакансии: продавцы, кассиры, продавцы-консультанты и так далее.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="imgvakansy" variant="top" src="https://img4.goodfon.com/wallpaper/nbig/d/ee/bulochki-vypechka-assorti-sdoba.jpg" />
    <Card.Body>
      <Card.Title>Пекарня</Card.Title>
      <Card.Text>
      Немецкие пекарни занимают особое место не только в Германии, но и во всем Мире. Текстура, вкус и плотность - для немцев эти параметры идеальная возможность совместить науку и искусство. Вакансии: продавцы, кассиры и помощники в пекарне.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Erster Schritte</small>
    </Card.Footer>
  </Card>
</CardDeck>
    </div>
        )
    }
}

export default Vakansy;