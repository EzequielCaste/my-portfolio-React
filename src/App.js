import React from 'react'
import './styles/styles.scss';
import { Profile } from './components/Profile';
import { Skills } from './components/Skills';
import { Blog } from './components/Blog';
import { Hobbies } from './components/Hobbies';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() { 
  return (
    <main>      
      <Profile />
      <section id="skills_blog">
        <Skills />
        <Blog />
        <Hobbies />
        <Experience />
      </section>
      <Projects />   
      <Footer />         
    </main>
  );
}

export default App;
