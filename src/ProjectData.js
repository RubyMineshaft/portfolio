const data = [
  {
    id: 1,
    types: ["Java"],
    languages: ["java", "rails", "ruby", "html", "javascript"],
    title: "Scheduling System",
    shortDesc: "JavaFX application which provides GUI for managing appointments in database.",
    fullDesc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!"
    ],
    splashImage: "/assets/arthub-splash.png",
    largeImage: "/assets/arthub-full.png",
    githubURL: "https://github.com/RubyMineshaft/arthub-rails",
    demoURL: null,
    bullets: [
      "Implemented OAuth authentication strategy with Omniauth-Facebook gem",
      "Leveraged jQuery and JavaScript for AJAX functionality",
      "Configured Rails API with ActiveModel Serializers.",
      "Managed attachments with Active Storage and AWS S3 Bucket."
    ]
  },
  {
    id: 1,
    types: ["Java"],
    languages: ["java", "rails", "ruby", "html", "javascript"],
    title: "Scheduling System",
    shortDesc: "JavaFX application which provides GUI for managing appointments in database.",
    fullDesc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!"
    ],
    splashImage: "/assets/arthub-splash.png",
    largeImage: "/assets/arthub-full.png",
    githubURL: "https://github.com/RubyMineshaft/arthub-rails",
    demoURL: null,
    bullets: [
      "Implemented OAuth authentication strategy with Omniauth-Facebook gem",
      "Leveraged jQuery and JavaScript for AJAX functionality",
      "Configured Rails API with ActiveModel Serializers.",
      "Managed attachments with Active Storage and AWS S3 Bucket."
    ]
  },
  {
    id: 1,
    types: ["Java"],
    languages: ["java", "rails", "ruby", "html", "javascript"],
    title: "Scheduling System",
    shortDesc: "JavaFX application which provides GUI for managing appointments in database.",
    fullDesc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!"
    ],
    splashImage: "/assets/arthub-splash.png",
    largeImage: "/assets/arthub-full.png",
    githubURL: "https://github.com/RubyMineshaft/arthub-rails",
    demoURL: null,
    bullets: [
      "Implemented OAuth authentication strategy with Omniauth-Facebook gem",
      "Leveraged jQuery and JavaScript for AJAX functionality",
      "Configured Rails API with ActiveModel Serializers.",
      "Managed attachments with Active Storage and AWS S3 Bucket."
    ]
  },
  {
    id: 1,
    types: ["Java"],
    languages: ["java", "rails", "ruby", "html", "javascript"],
    title: "Scheduling System",
    shortDesc: "JavaFX application which provides GUI for managing appointments in database.",
    fullDesc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!"
    ],
    splashImage: "/assets/arthub-splash.png",
    largeImage: "/assets/arthub-full.png",
    githubURL: "https://github.com/RubyMineshaft/arthub-rails",
    demoURL: null,
    bullets: [
      "Implemented OAuth authentication strategy with Omniauth-Facebook gem",
      "Leveraged jQuery and JavaScript for AJAX functionality",
      "Configured Rails API with ActiveModel Serializers.",
      "Managed attachments with Active Storage and AWS S3 Bucket."
    ]
  },
  {
    id: 1,
    types: ["Java"],
    languages: ["java", "rails", "ruby", "html", "javascript"],
    title: "Scheduling System",
    shortDesc: "JavaFX application which provides GUI for managing appointments in database.",
    fullDesc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae eum magnam ratione quam omnis reprehenderit nobis, repellendus, minus, eveniet ex at ducimus facilis hic dolor. Nostrum ratione ad eum!"
    ],
    splashImage: "/assets/arthub-splash.png",
    largeImage: "/assets/arthub-full.png",
    githubURL: "https://github.com/RubyMineshaft/arthub-rails",
    demoURL: null,
    bullets: [
      "Implemented OAuth authentication strategy with Omniauth-Facebook gem",
      "Leveraged jQuery and JavaScript for AJAX functionality",
      "Configured Rails API with ActiveModel Serializers.",
      "Managed attachments with Active Storage and AWS S3 Bucket."
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