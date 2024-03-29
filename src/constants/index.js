import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  php,
  expressjs,
  sass,
  java,
  apple_calculator,
  hotel,
  jewelry_store,
  little_lemon_restaurant,
  scientific_calculator,
  tic_tac_toe,
  weather_app
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "Express JS",
    icon: expressjs,
  }
];


const projects = [
  {
    name: "Little Lemon Restaurant",
    description:
      "Little Lemon Restaurant Web Application is a user-friendly platform designed to enhance the dining experience for food enthusiasts. This innovative web-based solution offers a seamless interface for users to explore, reserve, and manage their dining experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: little_lemon_restaurant,
    source_code_link: "https://github.com/hassanaboukhalil/little_lemon_restaurant",
  },
  {
    name: "Hassan Hotel",
    description:
      "Hassan Hotel Web Application is a cutting-edge responsive project designed to elevate the hotel booking experience for users worldwide. With a focus on simplicity, convenience, and seamless integration, this innovative web-based solution offers a range of features, including room booking and hassle-free login options such as Google account integration.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/hassanaboukhalil/hotel",
  },
  {
    name: "Mangata and Gallo",
    description:
      "Mangata and Gallo Jewelry Store Web Application is a stunning online platform that embodies elegance, sophistication, and innovation in the realm of jewelry retail. Crafted with meticulous attention to detail, this website utilizes a dynamic combination of HTML, CSS, and JavaScript to create an immersive and visually captivating shopping experience for users.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "AtroposJS",
        color: "pink-text-gradient",
      },
    ],
    image: jewelry_store,
    source_code_link: "https://github.com/hassanaboukhalil/Jewelry-Store",
  },
  {
    name: "Apple Calculator",
    description:
      "The Apple Calculator Web Application is a sophisticated digital tool crafted using ReactJS, meticulously designed to mirror the simplicity and functionality of Apple's calculator app. With a sleek interface, intuitive controls, and robust features, this web-based calculator offers users a seamless and delightful calculation experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "context-api",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: apple_calculator,
    source_code_link: "https://github.com/hassanaboukhalil/Apple-Calculator",
  },
  {
    name: "Weather App",
    description:
      "Weather Web Application is a simple and intuitive application that provides real-time weather information along with captivating city images. Easily stay updated with the current weather conditions, sky type, humidity, and wind speed for any city of your choice.",
    tags: [
      {
        name: "OpenWeatherMap",
        color: "blue-text-gradient",
      },
      {
        name: "Unsplash",
        color: "green-text-gradient",
      },
      {
        name: "Ajax",
        color: "pink-text-gradient",
      },
    ],
    image: weather_app,
    source_code_link: "https://github.com/hassanaboukhalil/WeatherApp",
  },
  {
    name: "Tic Tac Toe Game",
    description:
      "This is a simple implementation of the classic Tic Tac Toe game in JavaScript. It allows two players to take turns marking spaces on a 3x3 grid until one player wins or the game ends in a draw.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      }
    ],
    image: tic_tac_toe,
    source_code_link: "https://github.com/hassanaboukhalil/Tic-Tac-Toe",
  },
  {
    name: "Scientific Calculator",
    description:
      "The Scientific Calculator Web Application is a versatile tool crafted with HTML, CSS, and JavaScript, tailored to meet the diverse needs of students, professionals, and math enthusiasts alike. This sophisticated web-based calculator combines sleek design, intuitive functionality, and advanced features to provide users with a seamless and efficient calculation experience.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      }
    ],
    image: scientific_calculator,
    source_code_link: "https://github.com/hassanaboukhalil/scientific_calculator",
  },
];

export { services, technologies, projects };
