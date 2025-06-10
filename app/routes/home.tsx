import type { Route } from './+types/home';
import { Navigation } from '../components/navigation';
import { Section } from '../components/section';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'N. M Qalaba' },
    { 
      name: 'description', 
      content: 'Welcome to my portfolio' 
    },
  ];
}

export default function Home() {
  return (
    <>
      <Navigation />
      <Section 
        heading='Welcome to the website.'
        hasArticles={true}
        centerText={false}
       />
      <Section
        heading='Projects Portfolio'
        hasArticles={false}
        centerText={true}
       />
       <Section 
        heading='Welcome to the website.'
        hasArticles={true}
        centerText={false}
       />
    </>
  )
  
}
