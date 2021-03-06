import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Link } from 'gatsby';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../../styles/navbar.scss';

import phdLogo from '../../images/phd-logo.png';
import menuBtn from '../../images/menu-btn.png';
import closeBtnWhite from '../../images/close-btn-white.png';
import closeBtnBlack from '../../images/close-btn-black.png';

import CallBtn from '../Button/button-1';

Modal.setAppElement('#___gatsby');

const Navbar = () => {
  const [open, setOpen] = useState({ isOpen: false });

  const handleResize = () => {
    const width = window.innerWidth;
    const maxWidth = 992;
    const overlay = document.getElementById('nav-overlay');

    if (width >= maxWidth) {
      document.body.classList.remove('scroll-disabled');
      overlay.classList.add('transition-disabled');
    } else if (overlay.classList.contains('show-overlay')) {
      document.body.classList.add('scroll-disabled');
      overlay.classList.remove('transition-disabled');
    } else if (width < maxWidth) {
      overlay.classList.remove('transition-disabled');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    document.body.classList.remove('scroll-disabled');
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = () => {
    setOpen({ isOpen: true });
    hideNavOverlay();
  };

  const closeModal = () => {
    setOpen({ isOpen: false });
  };

  const showOverlay = () => {
    const overlay = document.getElementById('nav-overlay');
    overlay.classList.add('show-overlay');
    document.body.classList.add('scroll-disabled');
  };

  const hideNavOverlay = () => {
    const overlay = document.getElementById('nav-overlay');
    overlay.classList.remove('show-overlay');
    document.body.classList.remove('scroll-disabled');
  };

  const toggleDropdown = () => {
    const dropdown = document.getElementById('dropdown-toggle');
    dropdown.classList.toggle('show-dropdown-link');
  };

  const onSubmit = () => {
    setTimeout(() => {
      const submitFormBtn = document.getElementById('submit-form-btn');
      submitFormBtn.style.display = 'none';

      const fullName = document.getElementById('w-full-name');
      fullName.style.display = 'none';

      const phoneNumber = document.getElementById('w-phone-number');
      phoneNumber.style.display = 'none';

      const successMsg = document.getElementById('success-msg');
      successMsg.style.display = 'block';
    }, 1000);
  };

  const phoneRegex = /((\\+[1-9 ]{1,4}[ \\-]*)|(\\([0-9 ]{2,3}\\)[ \\-]*)|([0-9 ]{2,4})[ \\-]*)*?[0-9 ]{3,4}?[ \\-]*[0-9 ]{3,4}?$/;
  return (
    <nav className='nav'>
      <div className='nav-menu'>
        <div
          className='w-container'
          data-aos='fade'
          data-aos-easing='ease'
          data-aos-duration='700'
          data-aos-delay='100'
        >
          <Link to='/' className='w-phd-logo'>
            <img
              src={phdLogo}
              alt='Plant Hire Division logo'
              className='phd-logo'
            />
          </Link>
        </div>
        <ul className='nav-overlay' id='nav-overlay' role='tree'>
          <div
            className='w-nav-overlay'
            data-aos='fade'
            data-aos-easing='ease'
            data-aos-duration='700'
            data-aos-delay='100'
          >
            <img
              onClick={hideNavOverlay}
              src={closeBtnBlack}
              alt='Close button'
              className='close-btn-black'
              role='button'
            />
            <li
              onClick={toggleDropdown}
              className='dropdown-toggle'
              id='dropdown-toggle'
              role='presentation'
            >
              <div className='dropdown-menu'>
                <p>Services</p>
                <div
                  aria-label='Arrow down black'
                  role='button'
                  className='arrow-down-black'
                />
              </div>
              <ul className='dropdown-link' role='tree'>
                <li role='presentation'>
                  <Link
                    to='/plant-hire'
                    role='treeitem'
                    activeClassName='active-link'
                  >
                    Plant Hire
                  </Link>
                </li>
                <li role='presentation'>
                  <Link
                    to='/working-platforms'
                    role='treeitem'
                    activeClassName='active-link'
                  >
                    Working Platforms
                  </Link>
                </li>
                <li role='presentation'>
                  <Link
                    to='/specialities'
                    role='treeitem'
                    activeClassName='active-link'
                  >
                    Specialities
                  </Link>
                </li>
                <li role='presentation'>
                  <Link
                    to='/tool-hire'
                    role='treeitem'
                    activeClassName='active-link'
                  >
                    Tool Hire
                  </Link>
                </li>
              </ul>
            </li>
            <li role='presentation'>
              <Link
                to='/case-studies'
                role='treeitem'
                activeClassName='active-link'
              >
                Case Studies
              </Link>
            </li>
            <li role='presentation'>
              <Link
                to='/resources'
                role='treeitem'
                activeClassName='active-link'
              >
                Resources
              </Link>
            </li>
            <li role='presentation'>
              <Link
                to='/training'
                role='treeitem'
                activeClassName='active-link'
              >
                Training
              </Link>
            </li>
            <li role='presentation'>
              <Link to='/contact' role='treeitem' activeClassName='active-link'>
                Contact
              </Link>
            </li>
            <li role='presentation'>
              <p
                onClick={openModal}
                className='request-callback-link'
                role='treeitem'
              >
                Request Callback
              </p>
              <Modal
                closeTimeoutMS={450}
                isOpen={open.isOpen}
                contentLabel='Request Callback'
                onRequestClose={closeModal}
                className='modal-content'
                overlayClassName='modal-overlay'
              >
                <img
                  onClick={closeModal}
                  src={closeBtnWhite}
                  alt='Close button'
                  className='close-modal-btn'
                  role='button'
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
                  onSubmit={onSubmit}
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
                        aria-label='Submit Form'
                        role='button'
                      />
                      <div className='success-msg' id='success-msg'>
                        <p>Thank you! Your submission has been received!</p>
                      </div>
                    </div>
                  )}
                />
              </Modal>
            </li>
          </div>
        </ul>
      </div>
      <div className='menu-section'>
        <div
          className='call-btn'
          data-aos='fade'
          data-aos-easing='ease'
          data-aos-duration='700'
          data-aos-delay='100'
        >
          <CallBtn />
        </div>
        <img
          onClick={showOverlay}
          src={menuBtn}
          alt='Menu button'
          className='menu-btn'
          id='menu-btn'
          role='button'
          data-aos='fade'
          data-aos-easing='ease'
          data-aos-duration='700'
          data-aos-delay='100'
        />
      </div>
    </nav>
  );
};

export default Navbar;
