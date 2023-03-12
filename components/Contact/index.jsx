'use client';

import React from 'react';
import {PhoneIcon,EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import copy from 'copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Contact.scss';
import { ToastIcon } from 'react-hot-toast';

function Contact() {

  return (
    <>
        <div className='block'>
        <h1 className='head-text'>Get in <span>Touch</span></h1>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delayChildren: 0.5 }}
                className='contact'
            >
                <div className='contact-block'>
                    <div className='contact-info' onClick={()=>{
                        copy('+919048148307');
                        toast('Phone number copied to clipboard');
                    }}>
                        <PhoneIcon className='icon'/>
                        <p>+91 9048 148 307</p>
                    </div>
                    <div className='contact-info' onClick={()=>{
                        copy('ultimateallyn@gmail.com');
                        toast('Email copied to clipboard');
                    }}>
                        <EnvelopeIcon className='icon'/>
                        <p>ultimateallyn@gmail.com</p>
                    </div>
                </div>
            </motion.div>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                theme="dark"
                limit={1}
            />
        </div>
    </>
  )
}

export default Contact
