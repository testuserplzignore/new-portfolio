import snakeGame from './snakeGame.png'
import artBeat from './artBeat.png'
import bandIt from './band-it.png'

const skills = {
  js: {
    src:"tech/javascript.svg",
    name: 'Javascript'
  },
  html: {
    src:"tech/html5.svg",
    name: 'HTML 5'
  },
  css: {
    src:"tech/css3.svg" ,
    name: 'CSS 3'
  },
  react: {
    src:"tech/react.svg",
    name: 'React'
  },
  express: {
    src: "tech/express.svg",
    name: "Express"
  },
  electron: {
    src: "tech/electron.svg",
    name: "Electron"
  },
  heroku: {
    src: "tech/heroku.svg",
    name: "Heroku"
  },
  mongo: {
    src: "tech/mongodb.svg",
    name: "MongoDB"
  },
  node: {
    src: "tech/nodejs.svg",
    name: "Node JS"
  },
  postgres: {
    src: "tech/postgresql.svg",
    name: "Postgresql"
  },
  redux: {
    src: "tech/redux.svg",
    name: "Redux"
  },
  ruby: {
    src: "tech/ruby.svg",
    name: "Ruby"
  },
  rails: {
    src: "tech/rails.svg",
    name: "Rails"
  },
  sequelize: {
    src: "tech/sequelize.svg",
    name: "Sequelize"
  }
}

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
    tech: [skills.html, skills.css, skills.js]
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
    tech: [skills.html, skills.css, skills.js, skills.react]
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
    tech: [
      skills.html, 
      skills.css, 
      skills.js, 
      skills.react, 
      skills.node, 
      skills.express,
      skills.postgres, 
      skills.sequelize,
      skills.heroku
    ]
  },
]

export {
  skills,
  projects,
}
