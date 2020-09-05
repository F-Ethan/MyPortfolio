import React, { Component } from 'react';
import Image1 from '../../pictures/Ethan.png';
import homepage2 from '../../pictures/homepage2.jpg'
// import Image2 from '../../pictures/Ethan1.jpg';
// import Image3 from '../../pictures/Ethan2.jpg';
// import Image4 from '../../pictures/Ethan3.jpg';
// import Image5 from '../../pictures/Ethan4.jpg';
import ReactPhoto from '../../pictures/React3.jpg'
import python from '../../pictures/python.jpg'
import django from '../../pictures/django.jpg'
import angular from '../../pictures/angular.png'
import javascript from '../../pictures/javascript.png'
import bethelTech from '../../pictures/bethelTech.png'
import Card from '../Card';
import './Home.css';


const FeaturedCards = [
  {
    title: 'Full Stack Developer',
    img: Image1,
    about:
      "As a full stack web developer I am always looking for ways to improve my abilities. From going to School at Bethel Tech, \
    to watching tutorials on YouTube. Every year my abilities grow and my ambition grows right along with it.",
    blogId: '1',
  },
  {
    title: 'Student',
    img: bethelTech,
    about:
      "As a student at Bethel Tech, I am learning how to bring a project from the design phase all the way through development, \
      and into production. I am learning about Amazon web services (AWS), NodeJS, Angular, React, Express and much much more. ",
    blogId: '2',
  },
];

const Cards = [
  {
    title: 'Python',
    img: python,
    about:
      "In January 2019, I took Harvard's CS50 Web Programing with Python & Javascript Online. \
      The Class took us through the basics of programming. It started with the basics of C and then worked its way into \
      JavaScript. We spent a week learning some JavaScript and then moved right into Python. After we had learned the basics of Python we learned how to build a simple application in \
      Flask. For the Final in the class we had to build a paper trading stock market App. \
      After finishing the class I found that Flask was a powerful tool but lacked some of the functions I needed. That is when I came across Django.",
    blogId: '3',

  },
  {
    title: 'Django',
    img: django,
    about:
      "Django is my favorite Framework in Python. Django is a powerful server side Framework that handles all requests.\
      I got into Django because of how powerful of a framework it was. It takes longer to set up than Flask but it makes \
      handling authentication and complexe requests almost too easy. I used Django to build my web tracker app. It was designed to help my old employer keep track of all their equipment maintenance and location. I was never able to finnish the app as the project was over my head but I learned an amazing amount about Django and MySql.",
    blogId: '4',
  },
  {
    title: 'Javascript',
    img: javascript,
    about:
      "JavaScript is the first Programing Language I learned when I was still in high school. \
      I loved how simple the language was to learn and how powerful of a language it is. I have used javascript in all my projects. Form building games like tic tac toe, and connect four, to this portfolio built with React.",
    blogId: '5',
  },
  {
    title: 'React',
    img: ReactPhoto,
    about:
      "It was not until I was a student at Bethel Tech that I even heard of React or Angular. At the time I had already \
      learned Python and Django but even after learning these I still could not get my front end to look and act the way I wanted \
      it too. However as I started to learn about react I released that one of my problems was that I was comparing my work to\
      was advanced websites using Javascript frameworks to control the states. I was trying to make my projects look and act like\
      web applications without knowing that there where whole frameworks built for to make that possible. Now as I build complexe\
      applications using React and Angular I am quite proud of what I can do.",
    blogId: '6',
  },
  {
    title: 'Angular',
    img: angular,
    about:
      "Angular is one of the last frameworks I learned in school. By the time we got to Angular I was already building complex applications \
      with both front and back ends that would dynamically load and update when anything changes. However the more I learned about Angular the more\
      I came to love the framework. To me Angular seems fairly similar to Django, It has a very clean layout that makes it easy to organize your code. \
      It also come with so much functionality right from the start, making it easy to authenticate your users and and handel the routing within \
      your applications.",
    blogId: '7',
  },
];




export class HomePage extends Component {
  render() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return (
      <div className='container shadow-lg mt-3 p-3 mb-5 rounded'>
        <div className="pitcture">
          <img className="d-block w-100 " src={homepage2} alt="First slide"></img>

          {/* <div className='card text-center m-3 shadow p-3 mb-5 rounded'></div> */}
          <div className="d-none d-lg-block centered text-center">
            <div className="h2">Ethan Ferrier</div>
            <div className="h4 line-height">
              Welcome to my portfolio website. I am so glad you have taken the time and
              intrest to come here and learn more about me.
          </div>
          </div>
        </div>

        <div className='d-lg-none card text-center m-3 shadow p-3 mb-5 rounded '>
          <div className="card-header h3 mb-2">Ethan Ferrier</div>
          <div className="h4 line-height">
            Welcome to my portfolio website. I am so glad you have taken the time and
            intrest to come here and learn more about me.
          </div>
        </div>

        {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={homepage2} alt="First slide"></img>
              <div class="carousel-caption d-none d-md-block mb-3 position-center">
                <div className="h3">Ethan Ferrier</div>
                <div className="h5">
                  Welcome to my portfolio website. I am so glad you have taken then time and 
                  intrest to come here and learn more about me. 
                
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <Card Cards={FeaturedCards} Title='Featured' />
        <Card Cards={Cards} Title='More' />
      </div>
    );
  }
}

export default HomePage;
