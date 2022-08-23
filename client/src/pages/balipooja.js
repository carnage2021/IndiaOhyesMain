import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import axios, { URL } from '../services/api';

import Layout from '../components/layout';
import Footer from '../components/layout/footer';
import Slider from '../components/slider';
import Testimonial from '../components/testimonial';
import Form from '../components/form/index';
import FormGroup from '../components/form/formgroup';
import Button from '../components/buttons/button';
import Image from '../images/graphimmg.jpg';

import Omicon from '../images/omicon.png';
import EvntIcon from '../images/eventicon.png';
import TourIcon from '../images/touricon.png';
import constructionImg from '../images/construction.png';

const baliPoojaPage = () => {
  return (
    <>
      <Layout>
        <header className='bg-cream min-h-screen px-20 grid grid-cols-2 items-center -mt-24 tab-port:mt-0 tab-port:grid-cols-none'>
          <div className='tab-port:text-center tab-port:mt-16'>
            <h1 className='text-5xl leading-relaxed font-semibold'>
              <span className='block'>From India</span>
              <span className='block'>To India</span>
              <span className='block'>By India</span>
            </h1>

            <p className='mt-6 mb-12'>An E-supermarket for Indian Needs</p>

            <Link
              to='/'
              className='border-2 border-violet bg-violet text-white py-3 px-6 rounded-tl-full rounded-bl-full'>
              Let's start
            </Link>
            <Link
              to='/quick'
              className='border-2 border-violet bg-white py-3 px-6 rounded-tr-full rounded-br-full'>
              Quick contact
            </Link>
          </div>

          <div className='h-full mt-16 tab-port:h-96 tab-port:mb-16'>
            <Slider minHeight='100%' hideControls={true} autoPlay={true}>
              <img
                src={Omicon}
                alt='OM'
                className='h-full w-full object-contain'
              />
              <img
                src={EvntIcon}
                alt='event'
                className='h-full w-full object-contain'
              />
              <img
                src={TourIcon}
                alt='tour'
                className='h-full w-full object-contain'
              />
            </Slider>
          </div>
        </header>
        <div className='text-center'>
          <Form title='Form'>
            <FormGroup
              id='phone'
              inputType='tel'
              label='enter your phone number'
            />
            <FormGroup id='email' label='Enter your email id' />
            <FormGroup id='address' label='Enter your address' />
            <FormGroup id='time' label='Enter your data and time' />
            <Button>submit</Button>

            <div className='flex justify-center'></div>
          </Form>
        </div>

        <div>
          <section id='section-testimonial'>
            <Slider>
              <Testimonial
                review='Hello, world. Greetings from development mode.'
                writer='- Amin Painter'
                writerRole='Customer'
              />
              <Testimonial
                review='Hello, world. Greetings from development mode.'
                writer='- Mirage Patel'
                writerRole='Customer'
              />
              <Testimonial
                review='Hello, world. Greetings from development mode.'
                writer='- Jeet Patel'
                writerRole='Customer'
              />
              <Testimonial
                review='Hello, world. Greetings from development mode.'
                writer='- Aditya Patel'
                writerRole='Customer'
              />
            </Slider>
          </section>
        </div>
        <div className='content-center bg-cream'>
          <img className='object-cover content-center px-20' src={Image}></img>
        </div>

        <div className='text-center text-xl py-6'>
          <h1>Other Information</h1>
        </div>

        <div className='grid grid-flow-col gap-x-12 overflow-x-auto pt-14 pb-10 tab-port:w-full px-5 text-center'>
          <div className='bg-cream  p-5 rounded-xl flex flex-col'>
            <img src={Omicon} alt='SERVICE' className='mt-30' />
            <p className='mt-3 mb-5'> data.description </p>
            <div className='text-center mt-auto'>
              <Button>More Details</Button>
            </div>
          </div>

          <div className='bg-cream p-5 rounded-xl flex flex-col'>
            <img src={Omicon} alt='SERVICE' className='mt-30' />
            <p className='mt-3 mb-5'>data.description</p>
            <div className='text-center mt-auto'>
              <Button>More Details</Button>
            </div>
          </div>

          <div className='bg-cream  p-5 rounded-xl flex flex-col'>
            <img src={Omicon} alt='SERVICE' className='mt-30' />
            <p className='mt-3 mb-5'>data.description</p>
            <div className='text-center mt-auto'>
              <Button>More Details</Button>
            </div>
          </div>
        </div>

        <div className='text-center text-xl py-6'>
          <h1>Video Testimonial</h1>
        </div>

        <div className='grid grid-flow-col gap-x-12 overflow-x-auto pt-14 pb-10 tab-port:w-full px-5 text-center'>
          <div className='bg-cream  p-5 rounded-xl flex flex-col'>
            <img src={Omicon} alt='SERVICE' className='mt-30' />
          </div>

          <div className='bg-cream p-5 rounded-xl flex flex-col'>
            <img src={Omicon} alt='SERVICE' className='mt-30' />
          </div>

          <div className='bg-cream  p-5 rounded-xl flex flex-col'>
            <img src={Omicon} alt='SERVICE' className='mt-30' />
          </div>
        </div>

        <Footer />
      </Layout>
    </>
  );
};

const baliPage = () => (
  <div className='h-screen bg-cream flex flex-col items-center'>
    <img src={constructionImg} alt='WORK IN PROGRESS' className='h-[40rem]' />
    <h1 className='text-violet text-3xl'>Page under construction</h1>
  </div>
);

export default baliPage;
