import React, {useEffect, useState, useRef, createRef} from 'react'
import type { NextPage } from 'next';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

import {languages, frameworks, tools, projects} from '../public/data'

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Background from '../components/Background';


const Home: NextPage = () => {
  const [top, setTop] = useState(0);
  const scrollArea = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onScroll = (e: { target: any; }) => {
  setTop(e.target.scrollTop) 
  console.log(top);
  }


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onScroll({ target: scrollArea.current }), [])


  return (
    <div >
      <Head>
        <title>Welcome | CG3</title>
      </Head>
      <Background y={15 -(0.01 * top)} rY={0-(0.0005 * top)}/>
      <main  onScroll={onScroll}>
        <Navbar/>
        <div ref={scrollArea}>
          <Banner/>
          <AboutMe languages={languages} frameworks={frameworks} tools={tools}/>
          <Projects projects={projects} />
          <Contact />
          <Footer />
        </div>
      </main>    
    </div>
  )
}

export default Home
