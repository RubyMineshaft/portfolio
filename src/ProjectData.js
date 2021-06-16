const data = [
  {
    id: 1,
    types: ["Java"],
    languages: ["java", "mysql"],
    title: "Scheduling System",
    shortDesc: "JavaFX application which provides GUI for managing appointments in database.",
    fullDesc: [
      "JavaFX application for WGU Software II that provides a GUI for members of an organization to manage customers and appointments in their database.",
      "Uses JDBC to connect with a MySQL database and displays data in tables and forms. "
    ],
    splashImage: "/assets/scheduling.png",
    largeImage: "/assets/scheduling.png",
    githubURL: "https://github.com/RubyMineshaft/scheduling_system",
    demoURL: null,
    bullets: [
      "Leverages resource bundles to automatically translate based on system default.",
      "Utilizes Lambda expressions for more efficient lines of code.",
      "Converts times from UTC to system time for display. Validates against EST business hours before creating or updating records."
    ]
  },
  {
    id: 2,
    types: ["JavaScript", "React"],
    languages: ["javascript", "react", "scss", "html"],
    title: "Personal Portfolio",
    shortDesc: "JavaFX application which provides GUI for managing appointments in database.",
    fullDesc: [
      "We're definitely getting a bit recursive here; this is the site you're currently browsing!",
      "This portfolio was written in React.  It uses EmailJS for sending the contact form and material-ui for some of the icons."
    ],
    splashImage: "/assets/portfolio.png",
    largeImage: "/assets/portfolio.png",
    githubURL: "https://github.com/RubyMineshaft/portfolio",
    demoURL: "http://mattetress.com",
    bullets: [
      "Utilizes React hooks for managing state",
      "CSS animations for smoother transitions and slider functionality.",
      "Language icons from Devicon v2.12.0.",
      "iTyped.js library used for typing effect on home page."
    ]
  },
  {
    id: 3,
    types: ["Ruby", "Rails", "JavaScript"],
    languages: ["ruby", "rails", "javascript", "html", "bootstrap", "postgresql"],
    title: "ArtHub",
    shortDesc: "An event sharing platform for artists",
    fullDesc: [
      "ArtHub is an event sharing platform for artists. It allows users to create accounts by email or by signing in with Facebook. It has limited portfolio functionality, and allows users to save events they are interested in."
    ],
    splashImage: "/assets/arthub-splash.png",
    largeImage: "/assets/arthub-full.png",
    githubURL: "https://github.com/RubyMineshaft/arthub-rails",
    demoURL: "https://arthub-rails.herokuapp.com/",
    bullets: [
      "OAuth authentication strategy with Omniauth-Facebook gem",
      "jQuery and JavaScript used for AJAX functionality",
      "Rails API with ActiveModel Serializers.",
      "Manages attachments with Active Storage and AWS S3 Bucket."
    ]
  },
  {
    id: 4,
    types: ["Ruby"],
    languages: ["ruby", "bootstrap", "html", "postgresql"],
    title: "DreamCatcher",
    shortDesc: "Dream journal app with sinatra",
    fullDesc: [
      "This was my first Ruby web app.  It was written with the Sinatra framework and uses Sinatra ActiveRecord to interface with a PostgreSQL database.",
      "DreamCatcher is an online dream journal that allows people to log their dreams privately or share them with others.  Users are able to comment on public dreams and explore through a tagging system."
    ],
    splashImage: "/assets/dreamcatcher-thumb.png",
    largeImage: "/assets/dreamcatcher-full.png",
    githubURL: "https://github.com/RubyMineshaft/dreamcatcher-sinatra-app",
    demoURL: "http://dreamcatcher-sinatra.herokuapp.com/",
    bullets: [
      "Implements session-based user authentication with bcrypt gem and has_secure_password.",
      "Designed and styled using Bootstrap 4 and CSS.",
      "ActiveRecord with PostgreSQL for data persistence."
    ]
  },
  {
    id: 5,
    types: ["React", "Ruby", "Rails", "JavaScript"],
    languages: ["javascript", "react", "redux", "rails", "html", "css", "postgresql"],
    title: "TVPal",
    shortDesc: "Web app (React, Rails) that queries theMovieDB API and allows users to track television shows.",
    fullDesc: [
      "TVPal is a React web application that queries theMovieDB API and allows users to track and discover television shows. It has interfaces that display the most popular shows, top rated shows, shows airing today, and allows the user to search for a specific show.",
      "TVPal has a Ruby on Rails back end that is primarily used for account creation and authentication for now."
    ],
    splashImage: "/assets/tvpal-thumb.png",
    largeImage: "/assets/tvpal-full.png",
    githubURL: "https://github.com/RubyMineshaft/tv-pal",
    demoURL: "https://tv-pal.herokuapp.com/",
    bullets: [ 
       "Redux Thunk middleware for making asynchronous API calls and dispatching actions.", 
       "RESTful API using Ruby on Rails and the MVC pattern.", 
       "Takes advantage of React Router for rendering components to the DOM.", 
       "Handles user authentication with JWT based authentication."]
  },
  {
    id: 6,
    types: ["Java"],
    languages: ["java"],
    title: "Inventory System",
    shortDesc: "Simple inventory management system for WGU Software I.",
    fullDesc: [
      "This is a simple inventory management system written for WGU Software I. It allows users to create, update, and delete products and associated parts as well as manage inventory levels.",
      "The GUI was built following mock-ups provided. This application is not connected to a database and, therefore, has no data persistence."
    ],
    splashImage: "/assets/inventory-thumb.png",
    largeImage: "/assets/inventory.png",
    githubURL: "https://github.com/RubyMineshaft/InventorySystem",
    demoURL: null,
    bullets: [
      "JDK: Java 11.0.10",
      "JavaFX 11.0.2",
      "Allows users to search for parts/products by ID or name.",
    ]
  },
  {
    id: 7,
    types: ["Ruby"],
    languages: ["ruby"],
    title: "SeaLife",
    shortDesc: "Command line interface gem that uses Nokogiri to scrape data from Oceana's Marine Life Encyclopedia and provides information about various marine animals.",
    fullDesc: [
      "SeaLife is a command line interface gem that uses Nokogiri to scrape data from Oceana's Marine Life Encyclopedia and provides information about various marine animals.",
      "This was my first Ruby Object Oriented Programming adventure. It was a lot of fun to make.  Check it out on rubygems.org using the live demo button below, or install it and try it out by running \"gem install sea_life\" from your terminal."
    ],
    splashImage: "/assets/sealife-thumb.png",
    largeImage: "/assets/sealife-full.png",
    githubURL: "https://github.com/RubyMineshaft/sea_life",
    demoURL: "https://rubygems.org/gems/sea_life",
    bullets: [
      "Procedural CLI following Ruby OOP principles and best practices",
      "Uses Nokogiri to scrape data from Oceana’s Marine Encyclopedia"
    ]
  }
]

export function getAllProjects() {
  return data;
}

export function getProjectType(type) {
  return data.filter(project => project.types.includes(type));
}

export function getTypes() {
  let arr = ["All"];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].types.length; j++) {
        const type = data[i].types[j];
        if (!arr.includes(type)) {
          arr.push(type);
        }
      }
    }
    return arr;
}