import React from 'react';
import Image3 from '../../pictures/truckphoto3.png';
import Val from '../../pictures/val.png';
import Ethan from '../../pictures/Ethan.png';
import Aubrena from '../../pictures/aubrena.png';
import Mitch from '../../pictures/mitch.png';

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
            <h2> Our Values </h2>
            <h4> Excellence </h4> Our food is farm to table and 100% organic.
            <h4> Community </h4> We gather people to join together and feast.
            <h4> Creativity & Growth </h4>
            We are always looking for different ways to expand our menu from
            glory to glory.
          </div>
          <div className='container text-center'>
            <h2> Locations </h2>
            <div className='row'>
              <ul className='container text-center '>
                <li className='list-group-item'> Redding, California </li>
                <li className='list-group-item'> Atlanta, Georgia </li>
                <li className='list-group-item'> Austin, Texas </li>
                <li className='list-group-item'> San Francisco, California </li>
                <li className='list-group-item'> San Diego, California </li>
                <li className='list-group-item'> Santa Barbara, California </li>
              </ul>
            </div>
          </div>
          <div className='text-center'>
            <h2> Our Founders </h2>
          </div>
          <div className='row'>
            <div className='col-md-7'>
              <div className='thumbnail'>
                <img
                  width='220'
                  height='200'
                  src={Val}
                  alt='Val'
                  className='mx-auto d-block'
                />
                <div className='caption'>
                  <p className='text-center'> Val </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='thumbnail'>
                <img
                  width='220'
                  height='200'
                  src={Aubrena}
                  alt='Aubrena'
                  className='mx-auto d-block'
                />
                <div className='caption'>
                  <p className='text-center'>Aubrena</p>
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
                  src={Mitch}
                  alt='Mitch'
                  className='mx-auto d-block'
                />
                <div className='caption'>
                  <p className='text-center'>Mitch</p>
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
