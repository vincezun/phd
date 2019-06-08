import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'gatsby';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../../styles/navbar.scss';

import phdLogo from '../../images/phd-logo.png';
import menuBtn from '../../images/menu-btn.png';
import closeBtn from '../../images/close-btn.png';
import arrowDownBlack from '../../images/arrow-down-black.png';

import CallBtn from '../Button/button-1';

Modal.setAppElement('#___gatsby');

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });

    this.hideOverlay();
  };

  afterOpenModal = () => {
    this.overlay.style.backgroundColor = 'yellow';
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  showOverlay = () => {
    var overlay = document.getElementById('nav-overlay');
    overlay.classList.add('show-overlay');
  };

  hideOverlay = () => {
    var overlay = document.getElementById('nav-overlay');
    overlay.classList.remove('show-overlay');
  };

  toggleDropdown = () => {
    var dropdown = document.getElementById('dropdown-toggle');
    dropdown.classList.toggle('show-dropdown-link');
  };

  onSubmit = () => {
    var submitFormBtn = document.getElementById('submit-form-btn');
    submitFormBtn.value = 'Please wait...';

    setTimeout(() => {
      submitFormBtn.style.display = 'none';

      var fullName = document.getElementById('w-full-name');
      fullName.style.display = 'none';

      var phoneNumber = document.getElementById('w-phone-number');
      phoneNumber.style.display = 'none';

      var successMsg = document.getElementById('success-msg');
      successMsg.style.display = 'block';
    }, 1000);
  };

  render() {
    var phoneRegex = /((\\+[1-9 ]{1,4}[ \\-]*)|(\\([0-9 ]{2,3}\\)[ \\-]*)|([0-9 ]{2,4})[ \\-]*)*?[0-9 ]{3,4}?[ \\-]*[0-9 ]{3,4}?$/;
    return (
      <nav className='nav'>
        <div className='nav-menu'>
          <div className='w-container'>
            <Link to='/'>
              <img src={phdLogo} alt='PHd logo' className='phd-logo' />
            </Link>
          </div>
          <ul className='nav-overlay' id='nav-overlay'>
            <img
              onClick={this.hideOverlay}
              src={closeBtn}
              alt='Close button'
              className='close-btn'
            />
            <li
              onClick={this.toggleDropdown}
              className='dropdown-toggle'
              id='dropdown-toggle'
            >
              <div className='dropdown-menu'>
                <p>Services</p>
                <img
                  src={arrowDownBlack}
                  alt='Arrow down black'
                  className='arrow-down-black'
                />
              </div>
              <ul className='dropdown-link'>
                <li>
                  <Link to='/plant-hire'>Plant Hire</Link>
                </li>
                <li>
                  <Link to='/working-platform'>Working Plantform</Link>
                </li>
                <li>
                  <Link to='/specialities'>Specialities</Link>
                </li>
                <li>
                  <Link to='/tool-hire'>Tool Hire</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/case-studies'>Case Studies</Link>
            </li>
            <li>
              <Link to='/resources'>Resources</Link>
            </li>
            <li>
              <Link to='/training'>Training</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <p onClick={this.openModal} className='request-callback-link'>
                Request Callback
              </p>
              <Modal
                isOpen={this.state.isOpen}
                contentLabel='Request Callback'
                onRequestClose={this.closeModal}
                className='modal-content'
                overlayClassName='modal-overlay'
              >
                <img
                  onClick={this.closeModal}
                  src={closeBtn}
                  alt='Close button'
                  className='close-modal-btn'
                />

                <Formik
                  initialValues={{
                    fullName: '',
                    phoneNumber: ''
                  }}
                  validationSchema={Yup.object().shape({
                    fullName: Yup.string()
                      .required('This field is required.')
                      .max(80, 'Please enter no more than 80 characters'),
                    phoneNumber: Yup.string()
                      .required('This field is required.')
                      .matches(phoneRegex, {
                        excludeEmptyString: true,
                        message: 'Invalid phone number'
                      })
                      .max(50, 'Please enter no more than 50 characters')
                  })}
                  onSubmit={this.onSubmit}
                  render={({
                    errors,
                    values,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                  }) => (
                    <div className='callback-form'>
                      <p className='callback-heading'>Request Callback</p>
                      <p className='callback-description'>
                        Add your details below and we'll get back to you soon as
                        possible.
                      </p>
                      <div className='w-full-name' id='w-full-name'>
                        <label htmlFor='fullName'>Full Name</label>
                        <Field
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fullName}
                          type='text'
                          name='fullName'
                          className={
                            errors.fullName && touched.fullName
                              ? 'full-name-field err'
                              : 'full-name-field'
                          }
                        />
                        <ErrorMessage name='fullName'>
                          {msg => <div className='err-msg'>{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className='w-phone-number' id='w-phone-number'>
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <Field
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phoneNumber}
                          type='text'
                          name='phoneNumber'
                          className={
                            errors.phoneNumber && touched.phoneNumber
                              ? 'number-field err'
                              : 'number-field'
                          }
                        />
                        <ErrorMessage name='phoneNumber'>
                          {msg => <div className='err-msg'>{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <Field
                        type='submit'
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                        className='submit-form-btn'
                        id='submit-form-btn'
                        value='Submit Form'
                      />
                      <div className='success-msg' id='success-msg'>
                        <p>Thank you! Your submission has been received!</p>
                      </div>
                    </div>
                  )}
                />
              </Modal>
            </li>
          </ul>
        </div>
        <div className='w-container'>
          <div className='call-btn'>
            <CallBtn />
          </div>
          <img
            onClick={this.showOverlay}
            src={menuBtn}
            alt='Menu button'
            className='menu-btn'
            id='menu-btn'
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
