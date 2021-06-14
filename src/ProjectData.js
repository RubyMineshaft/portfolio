const data = [
  {
    id: 1,
    types: ["Java"],
    title: "Scheduling System",
    shortDesc: "JavaFX application which provides GUI for managing appointments in database.",
    fullDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!",
    splashImage: "/assets/arthub-splash.png",
    largeImage: "/assets/arthub-full.png",
    githubURL: "https://github.com/RubyMineshaft/arthub-rails",
    demoURL: "https://arthub-rails.herokuapp.com/"
  },
  {
    id: 2,
    types: ["Ruby", "Rails"],
    title: "ArtHub",
    shortDesc: "Ruby on Rails networking web app for artists",
    fullDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!",
    splashImage: "/assets/arthub-splash.png",
    largeImage: "/assets/arthub-full.png",
    githubURL: "https://github.com/RubyMineshaft/arthub-rails",
    demoURL: "https://arthub-rails.herokuapp.com/"
  }, 
  {
    id: 3,
    types: ["React", "Rails"],
    title: "Scheduling System",
    shortDesc: "JavaFX application which provides GUI for managing appointments in database.",
    fullDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!",
    splashImage: "/assets/arthub-splash.png",
    largeImage: "/assets/arthub-full.png",
    githubURL: "https://github.com/RubyMineshaft/arthub-rails",
    demoURL: "https://arthub-rails.herokuapp.com/"
  },
  {
    id: 4,
    types: ["Java"],
    title: "Scheduling System",
    shortDesc: "JavaFX application which provides GUI for managing appointments in database.",
    fullDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!",
    splashImage: "/assets/arthub-splash.png",
    largeImage: "/assets/arthub-full.png",
    githubURL: "https://github.com/RubyMineshaft/arthub-rails",
    demoURL: "https://arthub-rails.herokuapp.com/"
  },
  {
    id: 5,
    types: ["Java"],
    title: "Scheduling System",
    shortDesc: "JavaFX application which provides GUI for managing appointments in database.",
    fullDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!",
    splashImage: "/assets/arthub-splash.png",
    largeImage: "/assets/arthub-full.png",
    githubURL: "https://github.com/RubyMineshaft/arthub-rails",
    demoURL: "https://arthub-rails.herokuapp.com/"
  },
  {
    id: 6,
    types: ["Java"],
    title: "Scheduling System",
    shortDesc: "JavaFX application which provides GUI for managing appointments in database.",
    fullDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!",
    splashImage: "/assets/arthub-splash.png",
    largeImage: "/assets/arthub-full.png",
    githubURL: "https://github.com/RubyMineshaft/arthub-rails",
    demoURL: "https://arthub-rails.herokuapp.com/"
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