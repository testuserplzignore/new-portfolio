
import cPlusPlus from './c++.svg'
import css3 from './css-3.svg'
import django from './django.svg'
import flask from './flask.svg'
import html5 from './html-5.svg'
import python from './python.svg'
import rails from './rails.svg'
import reactImg from './react.svg'
import ruby from './ruby.svg'
import javascript from './javascript.svg'

import snakeGame from './snakeGame.png'
import artBeat from './artBeat.png'
import bandIt from './band-it.png'

const skills = [
  {
    img: javascript,
    name: 'javascript'
  },
  {
    img: html5,
    name: 'HTML 5'
  },
  {
    img: css3,
    name: 'CSS 3'
  },
  {
    img: reactImg,
    name: 'React'
  },
  {
    img: python,
    name: 'Python'
  },
  {
    img: flask,
    name: 'Flask'
  },
  {
    img: django,
    name: 'Django'
  },
  {
    img: ruby,
    name: 'Ruby'
  },
  {
    img: rails,
    name: 'Ruby on Rails'
  },
  {
    img: cPlusPlus,
    name: 'C++'
  }
]

const projects = [
  {
    name: 'Snake',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in\
    volutpat magna. Vestibulum interdum convallis venenatis. Nam porta ornare porttitor. \
    Praesent pretium porttitor elit et tincidunt. Morbi viverra orci vel ex cursus gravida. \
    Curabitur rhoncus mauris ut sapien maximus, in semper nisi aliquet. Aenean tincidunt \
    dictum ultrices. Vestibulum viverra ante sodales quam porta aliquam. Curabitur in posuere\
    eros.`,
    img: snakeGame,
    link: `http://tacky-thrill.surge.sh/`,
    github: `https://github.com/ElllGeeEmm/snake`,
  },
  {
    name: 'NY Art Beat',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
     volutpat magna. Vestibulum interdum convallis venenatis. Nam porta ornare porttitor. 
     Praesent pretium porttitor elit et tincidunt. Morbi viverra orci vel ex cursus gravida. 
     Curabitur rhoncus mauris ut sapien maximus, in semper nisi aliquet. Aenean tincidunt 
     dictum ultrices. Vestibulum viverra ante sodales quam porta aliquam. Curabitur in posuere
      eros.`,
    img: artBeat,
    link: `http://ny-art-beat-react.surge.sh/`,
    github: `https://github.com/ElllGeeEmm/ny-art-beat-app`,
  },
  {
    name: 'Band-It',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
     volutpat magna. Vestibulum interdum convallis venenatis. Nam porta ornare porttitor. 
     Praesent pretium porttitor elit et tincidunt. Morbi viverra orci vel ex cursus gravida. 
     Curabitur rhoncus mauris ut sapien maximus, in semper nisi aliquet. Aenean tincidunt 
     dictum ultrices. Vestibulum viverra ante sodales quam porta aliquam. Curabitur in posuere
      eros.`,
    img: bandIt,
    link: `http://banditproject.surge.sh/`,
    github: `https://github.com/mikebrown4000/Band-It`,
  },
]

export {
  skills,
  projects,
}
