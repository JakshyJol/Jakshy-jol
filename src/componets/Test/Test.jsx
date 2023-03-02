import React, { useState } from 'react'
import one  from './../../assetsFromTest/1.png'
import two  from './../../assetsFromTest/2.png'
import three  from './../../assetsFromTest/3.png'
import four  from './../../assetsFromTest/4.png'
import five from './../../assetsFromTest/5.png'
import six  from './../../assetsFromTest/6.png'
import seven  from './../../assetsFromTest/7.png'
import eight  from './../../assetsFromTest/8.png'
import nine  from './../../assetsFromTest/9.png'
import ten  from './../../assetsFromTest/10.png'
import eleven  from './../../assetsFromTest/11.png'
import twelve  from './../../assetsFromTest/12.jpg'
import threeteen  from './../../assetsFromTest/13.jpg'
import fourteen  from './../../assetsFromTest/14.jpg'
import fiveteen  from './../../assetsFromTest/15.jpg'
import sixteen  from './../../assetsFromTest/16.jpg'
import seventeen  from './../../assetsFromTest/17.jpg'
import eightteen  from './../../assetsFromTest/18.jpg'
import nineteen  from './../../assetsFromTest/19.jpg'
import twenty  from './../../assetsFromTest/20.jpg'

import './Test.css'




export const Test = (props) => {

const questions = [
  {
    questionText: 'По какой траектории Вам разрешено выполнить разворот?',
    img:  one,
    answerOptions: [
        {answerText: 'Только по А.', isCorrect: true},
        {answerText: 'Только по Б.', isCorrect: false},
        {answerText: 'По любой из указанных.', isCorrect: false},
      
    ]
  },
  {
    questionText: 'С какой скоростью Вы можете продолжить движение вне населенного пункта по левой полосе на легковом автомобиле?',
    img: two,
    answerOptions: [
      
        {answerText: 'Не более 50 км/ч', isCorrect: false},
        {answerText: 'Не менее 50 км/ч и не более 70 км/ч. 3', isCorrect: false},
        {answerText: 'Не менее 50 км/ч и не более 90 км/ч', isCorrect: true},
      
    ]
  },
  {
    questionText: 'Можно ли водителю легкового автомобиля выполнить обгон грузовых автомобилей вне населенного пункта по такой траектории?',
    img: three,
    answerOptions: [
      
        {answerText: 'Можно.', isCorrect: true},
        {answerText: 'Можно, если скорость грузовых автомобилей менее 30 км/ч.', isCorrect: false},
        {answerText: 'Нельзя.', isCorrect: false},
      
    ]
  },
  {
    questionText: 'В каком случае водителю разрешается поставить автомобиль на стоянку в указанном месте?',
    img: four,
    answerOptions: [
      
        {answerText: 'Только если расстояние до сплошной линии разметки не менее 3 м.', isCorrect: false},
        {answerText: 'Только если расстояние до края пересекаемой проезжей части не менее 5 м.', isCorrect: false},
        {answerText: 'При соблюдении обоих перечисленных условий.', isCorrect: true},
      
    ]
  },
  {
    questionText: 'Кому Вы обязаны уступить дорогу при повороте налево?',
    img: five,
    answerOptions: [
      
        {answerText: 'Только автобусу.', isCorrect: false},
        {answerText: 'Только легковому автомобилю.', isCorrect: false},
        {answerText: 'Никому.', isCorrect: true},
      
    ]
  },
  {
    questionText: 'Сколько полос для движения имеет данная дорога?',
    img: six,
    answerOptions: [
      
        {answerText: 'Две.', isCorrect: false},
        {answerText: 'Четыре.', isCorrect: true},
        {answerText: 'Пять.', isCorrect: false},
      
    ]
  },
  {
    questionText: 'Можно ли Вам въехать на мост первым?',
    img: seven,
    answerOptions: [
      
        {answerText: 'Можно.', isCorrect: true},
        {answerText: 'Можно, если Вы не затрудните движение встречному автомобилю.', isCorrect: false},
       { answerText: 'Нельзя.', isCorrect: false},
      
    ]
  },
  {
    questionText: 'Что запрещено в зоне действия этого знака?',
    img: eight,
    answerOptions: [
      
        {answerText: 'Движение любых транспортных средств.', isCorrect: false},
       { answerText: 'Движение всех транспортных средств со скоростью не более 20 км/ч.', isCorrect: false},
       { answerText: 'Движение механических транспортных средств.', isCorrect: true},
      
    ]
  },
  {
    questionText: 'Поднятая вверх рука водителя легкового автомобиля является сигналом, информирующим Вас о его намерении:',
    img: nine,
    answerOptions: [
      
        {answerText: 'Повернуть направо.', isCorrect: false},
        {answerText: 'Продолжить движение прямо.', isCorrect: false},
        {answerText: 'Снизить скорость, чтобы остановиться и уступить дорогу мотоциклу.', isCorrect: true},
      
    ]
  },
  {
    questionText: 'Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?',
    img: ten,
    answerOptions: [
      
        {answerText: 'На левом.', isCorrect: false},
        {answerText: 'На правом.', isCorrect: false},
        {answerText: 'На обоих.', isCorrect: true},
      
    ]
  },
  {
    questionText: 'Можно ли Вам выполнить разворот в этом месте?',
    img: eleven,
    answerOptions: [
      
        {answerText: 'Можно.', isCorrect: true},
        {answerText: 'Можно только при отсутствии приближающегося поезда.', isCorrect: false},
        {answerText: 'Нельзя.', isCorrect: false},
      
    ]
  },
  {
    questionText: 'Вы можете начать обгон:',
    img: twelve,
    answerOptions: [
      
       { answerText: 'На переезде.', isCorrect: false},
        {answerText: 'Непосредственно после переезда.', isCorrect: true},
        {answerText: 'Через 100 м после переезда.', isCorrect: false},
      
    ]
  },
  {
    questionText: 'По какой траектории Вам можно выполнить поворот налево?',
    img: threeteen,
    answerOptions: [
      
        {answerText: 'Только по А.', isCorrect: false},
        {answerText: 'Только по Б.', isCorrect: true},
        {answerText: 'По любой из указанных.', isCorrect: false},
      
    ]
  },
  {
    questionText: 'Вы намерены повернуть направо. Можете ли Вы приступить к    повороту?',
    img: fourteen,
    answerOptions: [
      
        {answerText: 'Можете.', isCorrect: false},
        {answerText: 'Можете, когда убедитесь, что при этом не будут созданы помехи грузовому автомобилю.', isCorrect: true},
        {answerText: 'Не можете.', isCorrect: false},
      
    ]
  },
  {
    questionText: 'Сколько пересечений проезжих частей имеет этот перекресток?',
    img: fiveteen,
    answerOptions: [
      
        {answerText: 'Одно. ', isCorrect: false},
        {answerText: 'Два.', isCorrect: true},
        {answerText: 'Четыре.', isCorrect: false},
      
    ]
  },
  {
    questionText: 'Эти знаки обязывают соблюдать дистанцию:',
    img: sixteen,
    answerOptions: [
      
        {answerText: 'Менее 70 м на протяжении 100 м.', isCorrect: false},
        {answerText: 'Не менее 70 м на протяжении 100 м.', isCorrect: true},
       { answerText: 'От 70 м до 100 м.', isCorrect: false},
      
    ]
  },
  {
    questionText: 'В каких направлениях вам разрешено продолжить движение?',
    img: seventeen,
    answerOptions: [
      
        {answerText: 'Только прямо', isCorrect: false},
        {answerText: 'Прямо или налево. ', isCorrect: true},
        {answerText: 'Прямо, налево или в обратном направлении.', isCorrect: false},
      
    ]
  },
  {
    questionText: 'На каком расстоянии от знака Вам разрешено поставить автомобиль на стоянку?',
    img: eightteen,
    answerOptions: [
      
        {answerText: 'Не менее 5 м. ', isCorrect: false},
        {answerText: 'Не менее 10 м. ', isCorrect: false},
        {answerText: 'Не менее 15 м.', isCorrect: true},
      
    ]
  },
  {
    questionText: 'Эти знаки предупреждают вас:',
    img: nineteen,
    answerOptions: [
      
        {answerText: 'O приближении к железнодорожному переезду с тремя путями.', isCorrect: false},
        {answerText: 'О наличии через 150300 м железнодорожного переезда без шлагбаума.', isCorrect: true},
        {answerText: 'О наличии через 50100 м железнодорожного переезда.', isCorrect: false},
      
    ]
  },
  {
    questionText: 'Разрешено ли Вам поставить автомобиль на стоянку в этом месте?',
    img: twenty,
    answerOptions: [
      
        {answerText: 'Разрешено.', isCorrect: true},
        {answerText: 'Разрешено, если Вы проживаете рядом с этим местом. ', isCorrect: false},
        {answerText: 'Запрещено.', isCorrect: false},
      
    ]
  },
]

const [currentQuestion,setCurrentQuestion] = useState(0)
const [score,setScore] = useState(0)
const [showScore, setShowScore] = useState(false)


  const handeleAnswerOptionClick = (isCorrect)=>{
    if(isCorrect){
      setScore(score + 1)
    }
    const nexQuetion = currentQuestion + 1
    if( nexQuetion < questions.length){
      setCurrentQuestion(nexQuetion)
    } else{
      setShowScore(true)
    }
  }
  const refresh = () =>{
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }


  const porcentage = Math.round(currentQuestion / questions.length * 100)
  console.log(porcentage)

  return (
    <div className='test'>
     
      <div className='style__hover'>

      <p onClick={props.handelClick}  className='btn_close'>&times;</p>

{
  showScore ? 
  <div className="section__score">
  { score > 17 ? <div><h1>Поздравляем, Вы успешно прошли тест</h1></div> : <div><h1>К сожалению, Вы не прошли тест</h1></div>}
  <div>
    <p>Правельных ответов {score } из {questions.length}</p>
  </div>
  <button onClick={refresh}>Повторить</button>
  </div> 

:

  <div className='Contant_all'>
     <div className='progress'>
        <div className='loading' style={{width: `${porcentage}%`}}></div>
      </div>
    <div className='question_number'>  
    <span>Вопрос {currentQuestion + 1}</span>/ {questions.length}
    </div>
    <div>
    <h1>
      {questions[currentQuestion].questionText}
      </h1>
      </div>
  <div className="answer__section">
  {questions[currentQuestion].answerOptions.map(item=> {
    return(
      <div className='test__input'>
        <button onClick={()=> handeleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>
      </div>
)})}
  </div>
    <div className='test_img'>
      <img src={questions[currentQuestion].img} alt="" />
    </div>
  </div>




}      
    </div>
    </div>
  )
}
