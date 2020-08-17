import React from 'react';
import Ethan1 from '../../pictures/Ethan1.jpg';
import Ethan from '../../pictures/Ethan.png';
import Ethan2 from '../../pictures/Ethan2.jpg';
import Ethan3 from '../../pictures/Ethan3.jpg';

const About = () => {
  return (
    <div className='About container shadow-lg p-3 mb-5 bg-white rounded'>
      <div className='card justify-content-center'>
        <div className='card'>
          <h2 className='Mission text-center mt-3'> My Start in the world of Tech: </h2>
          <div className='card-body mb-2'>
            When I was in high school I saw a promational video with Mark Zuckerberg and a few other big names
            in the tech world. The video talked about how thier was not eunogh software ingineers in the world.
            ot went on to say that in the future programers would seem to have super powers but there was a lack of
            talented people goining into the field. So to help they had started a free online aplication to help people
            learn how to coe. It was CodeAcadamy.com. After watching that video I spent the next six months sepnding
            any free time I could working on my JavaScript and PHP. after that I learnd anytime I could find the time.
            However I always felt like I was just playing around with some code. It seemed imposible that someday I
            would make a career out of this. But when I got a chance to go to Bethel Tech I jumped at the opertunity.
            Now I am desiging and building full scale web aplications from the ground up.
          </div>
          <img
            className='rounded mx-auto d-block'
            // width='550'
            height='400'
            src={Ethan}
            alt='food truck'
          />

          <div className='card-body text-center'>
            <h2> My Ethics </h2>
            <h4> Excellence </h4> Our food is farm to table and 100% organic.
            <h4> Community </h4> We gather people to join together and feast.
            <h4> Creativity & Growth </h4>
            We are always looking for different ways to expand our menu from
            glory to glory.
          </div>
          <div className='container text-center'>
            <h2> Programing Languages and framworks  </h2>
            <div className='row mb-3'>
              <div className="col-6">
                <div className="card" >
                  <div className="card-header">
                    Python
                </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Django</li>
                    <li className="list-group-item">Flask</li>
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <div className="card " >
                  <div className="card-header">
                    Other
                </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Html</li>
                    <li className="list-group-item">Css</li>
                    <li className="list-group-item">Sass</li>
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <div className="card " >
                  <div className="card-header">
                    JavaScript
                </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">React</li>
                    <li className="list-group-item">Angular</li>
                    <li className="list-group-item">Node</li>
                    <li className="list-group-item">Express</li>
                  </ul>
                </div>
              </div>


            </div>
          </div>
          <div className='text-center'>
            <h2> Me And My Wife </h2>
          </div>
          <div className='row'>
            <div className='col-md-7'>
              <div className='thumbnail'>
                <img
                  width='220'
                  height='200'
                  src={Ethan1}
                  alt='Ethan1'
                  className='mx-auto d-block'
                />
                <div className='caption'>
                  <p className='text-center'> Ethan1 </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='thumbnail'>
                <img
                  width='220'
                  height='200'
                  src={Ethan2}
                  alt='Ethan2'
                  className='mx-auto d-block'
                />
                <div className='caption'>
                  <p className='text-center'>Ethan2</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-7'>
              <div className='thumbnail'>
                <img
                  width='210'
                  height='200'
                  src={Ethan}
                  alt='Ethan'
                  className='mx-auto d-block'
                />
                <div className='caption'>
                  <p className='text-center'>Ethan </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='thumbnail'>
                <img
                  width='220'
                  height='200'
                  src={Ethan3}
                  alt='Ethan3'
                  className='mx-auto d-block'
                />
                <div className='caption'>
                  <p className='text-center'>Ethan3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
