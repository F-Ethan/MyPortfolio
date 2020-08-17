import React from 'react';

const ContactForm = () => {

  return (
    <div className='container col-9 col-md-5 mb-3 mt-3 shadow-lg  bg-white rounded'>
      <div className='card row'>
        <div className='card-header'>
          <div className='h3 card-title'>Contact Me</div>
          <div className='h6 card-subtitle mb-2 text-muted'>
            I would Love to connect with you.
            </div>
        </div>
        <div className='card-body '>
          <ul>
            <li class="list-group-item">Email: </li>
            <li class="list-group-item">Fethanerrier@gamil.com</li>
            <li class="list-group-item">Phone Number:</li>
            <li class="list-group-item">(503) 983-3730</li>

          </ul>
        </div>
      </div>
    </div>
  );
}


export default ContactForm;