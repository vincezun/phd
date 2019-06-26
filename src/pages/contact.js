import React, { Component } from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/contact.scss';

import Layout from '../components/Layout/layout';
import Breadcrumb from '../components/Layout/breadcrumb';
import SEO from '../components/seo';

class Contact extends Component {
  onSubmit = () => {
    setTimeout(() => {
      var fields = document.getElementById('fields');
      fields.style.display = 'none';

      var submitted = document.getElementById('submitted');
      submitted.style.display = 'block';
    }, 1000);
  };

  render() {
    var phoneRegex = /((\\+[1-9 ]{1,4}[ \\-]*)|(\\([0-9 ]{2,3}\\)[ \\-]*)|([0-9 ]{2,4})[ \\-]*)*?[0-9 ]{3,4}?[ \\-]*[0-9 ]{3,4}?$/;
    return (
      <Layout>
        <div className='contact-wrapper'>
          <section>
            <div
              className='hero-section w-container'
              aria-label='Plant Hire Division Contact'
            >
              <SEO title='Contact' />
              <Breadcrumb link='contact' name='Contact' />
              <h1
                className='heading'
                data-aos='fade-down'
                data-aos-easing='ease'
                data-aos-duration='1000'
                data-aos-delay='300'
              >
                Contact
              </h1>
              <p
                className='description'
                data-aos='fade-up'
                data-aos-easing='ease'
                data-aos-duration='1000'
                data-aos-delay='300'
                data-aos-anchor='.heading'
              >
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Curabitur blandit tempus
                porttitor. Sed posuere consectetur est at lobortis. Aenean
                lacinia bibendum nulla sed consectetur.
              </p>
              <p
                className='hero-contact'
                data-aos='fade-up'
                data-aos-easing='ease'
                data-aos-duration='1000'
                data-aos-delay='300'
                data-aos-anchor='.description'
              >
                The Lodge - Oldershaw School Wallasey, <br />
                Merseyside CH45 4RJ
              </p>
              <p
                className='email'
                data-aos='fade-up'
                data-aos-easing='ease'
                data-aos-duration='1000'
                data-aos-delay='300'
                data-aos-anchor='.hero-contact'
              >
                orders@planthiredivision.com
              </p>
              <p
                className='contact-number'
                data-aos='fade-up'
                data-aos-easing='ease'
                data-aos-duration='1000'
                data-aos-delay='300'
                data-aos-anchor='.email'
              >
                0151 639 6857
              </p>
            </div>
          </section>
          <section>
            <Formik
              initialValues={{
                fullName: '',
                email: '',
                phoneNumber: '',
                reason: '',
                message: ''
              }}
              validationSchema={Yup.object().shape({
                fullName: Yup.string()
                  .required('This field is required.')
                  .max(80, 'Please enter no more than 80 characters'),
                email: Yup.string()
                  .email('Invalid email address')
                  .required('This field is required.'),
                phoneNumber: Yup.string()
                  .required('This field is required.')
                  .matches(phoneRegex, {
                    excludeEmptyString: true,
                    message: 'Invalid phone number'
                  })
                  .max(50, 'Please enter no more than 50 characters'),
                reason: Yup.string().required('This field is required'),
                message: Yup.string().required('This field is required')
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
                <Form>
                  <div className='contact-form'>
                    <div
                      id='fields'
                      data-aos='fade-up'
                      data-aos-easing='ease'
                      data-aos-duration='1000'
                      data-aos-delay='300'
                    >
                      <div className='w-full-name'>
                        <label htmlFor='fullName'>Full Name</label>
                        <Field
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fullName}
                          type='text'
                          name='fullName'
                          aria-label='Full Name'
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
                      <div className='w-email'>
                        <label htmlFor='email'>Email</label>
                        <Field
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          type='email'
                          name='email'
                          aria-label='Email Address'
                          className={
                            errors.email && touched.email
                              ? 'email-field err'
                              : 'email-field'
                          }
                        />
                        <ErrorMessage name='email'>
                          {msg => <div className='err-msg'>{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className='w-phone-number'>
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <Field
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phoneNumber}
                          type='text'
                          name='phoneNumber'
                          aria-label='Phone Number'
                          className={
                            errors.phoneNumber && touched.phoneNumber
                              ? 'phone-number-field err'
                              : 'phone-number-field'
                          }
                        />
                        <ErrorMessage name='phoneNumber'>
                          {msg => <div className='err-msg'>{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className='w-reason'>
                        <label htmlFor='reason'>
                          Your reason for contacting us today
                        </label>
                        <Field
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.reason}
                          as='select'
                          name='reason'
                          aria-label='Your reason for contacting us today'
                          className={
                            errors.reason && touched.reason
                              ? 'reason-field err'
                              : 'reason-field'
                          }
                        >
                          <option value=''>Select one...</option>
                          <option value='General'>General</option>
                          <option value='Training'>Training</option>
                          <option value='Sales'>Sales</option>
                        </Field>
                        <ErrorMessage name='reason'>
                          {msg => <div className='err-msg'>{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className='w-message'>
                        <label htmlFor='message'>Message</label>
                        <Field
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                          as='textarea'
                          cols='30'
                          rows='10'
                          name='message'
                          aria-label='What do you need help with?'
                          className={
                            errors.message && touched.message
                              ? 'message-field err'
                              : 'message-field'
                          }
                        />
                        <ErrorMessage name='message'>
                          {msg => <div className='err-msg'>{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className='w-submit-btn'>
                        <Field
                          type='submit'
                          disabled={isSubmitting}
                          onClick={handleSubmit}
                          className='submit-btn'
                          id='submit-btn'
                          value='Submit Form'
                        />
                      </div>
                    </div>
                    <p className='success-msg' id='submitted'>
                      Thank you! Your submission has been received!
                    </p>
                  </div>
                </Form>
              )}
            />
          </section>
        </div>
      </Layout>
    );
  }
}

export default Contact;
