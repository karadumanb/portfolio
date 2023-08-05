/* eslint-disable max-lines */
export enum Category {
  frontend = 'UI / Frontend',
  fullStack = 'Full Stack',
  mobile = 'Mobile (React Native)'
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Klarx GmbH',
    slug: 'klarx-gmbh',
    category: Category.fullStack,
    img: 'klarx.jpg',
    publishDate: '2018-2023',
    images: [
      {
        id: 21,
        title: 'Klarx Main Photo',
        img: 'klarx_1.png'
      },
      {
        id: 22,
        title: 'Klarx App',
        img: 'klarx_2.png'
      },
      {
        id: 23,
        title: 'Klarx Web',
        img: 'klarx_3.png'
      }
    ],
    info: {
      client: 'About Company',
      companyInfo: [
        {
          id: 1,
          title: 'Name',
          details: 'klarx GmbH'
        },
        {
          id: 2,
          title: 'Services',
          details: 'Web & Mobile Development'
        },
        {
          id: 3,
          title: 'Website',
          details: 'https://klarx.de'
        },
        {
          id: 4,
          title: 'Location',
          details: 'Munich'
        }
      ],
      title: 'Objective',
      description:
        'klarx is a Munich based start-up operating Germanys largest online platform for construction equipment and heavy machinery rental. As an independent full-service provider, klarx digitalizes the entire rental process for rental stations and lessees.',
      technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'React',
            'React Native',
            'Ruby on Rails',
            'Capacitor',
            'Capistrano',
            'Graphql',
            'REST',
            'HTML',
            'CSS',
            'SCSS',
            'LESS',
            'Typescript',
            'Heroku',
            'Digitalocean',
            'Github'
          ]
        }
      ],
      detailTitle: 'Challenge',
      details: [
        {
          id: 1,
          details:
            'Delivered and managed customer and supplier facing projects with a design system using React components, collaborating with stakeholders to develop a set of fully accessible reusable UI elements that could be implemented across multiple applications, which allowed greater consistency and efficiency in the design and development process, ultimately improving the user experience.'
        },
        {
          id: 2,
          details:
            'Introduced micro-frontends architecture extracting parts of the legacy monolith frontend into their own React applications and created a component library to support the applications with common components and services.'
        },
        {
          id: 3,
          details: 'Reduced 95% of the bugs which were occurring in a month.'
        },
        {
          id: 4,
          details: 'Pushed strongly typed, modularised architecture with test coverage of over 80%.'
        },
        {
          id: 5,
          details:
            'Managed big data with Ruby on Rails using Postgresql. Made applications handle over millions of rentals and machines within seconds.'
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Ovidos Creative',
    slug: 'ovidos-creative',
    category: Category.frontend,
    img: 'ovidos_1.png',
    publishDate: '2017-2018',
    images: [
      {
        id: 1,
        title: 'Ovidos Creative',
        img: 'ovidos_1.png'
      },
      {
        id: 2,
        title: 'Ovidos Creative',
        img: 'web-project-2.jpg'
      },
      {
        id: 3,
        title: 'Ovidos Creative',
        img: 'mobile-project-2.jpg'
      }
    ],
    info: {
      client: 'About Company',
      companyInfo: [
        {
          id: 1,
          title: 'Name',
          details: 'Ovidos Creative'
        },
        {
          id: 2,
          title: 'Services',
          details: 'UI Design & Frontend Development'
        },
        {
          id: 3,
          title: 'Website',
          details: 'http://ovidos.com/'
        },
        {
          id: 4,
          title: 'Location',
          details: 'Istanbul'
        }
      ],
      title: 'Objective',
      description:
        'Ovidos Creative is a Istanbul based software agency that serves to multiple clients. Multiple full stack applications and its maintenance are built and deployed for big clients within Turkey.',
      technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'Angular',
            'React',
            'Angular',
            'HTML',
            'CSS',
            'SCSS',
            'Typescript',
            'TailwindCSS',
            'Material UI',
            'Github',
            '.NET',
            'REST'
          ]
        }
      ],
      detailTitle: 'Challenge',
      details: [
        {
          id: 1,
          details:
            'Coded the new platforms for patients and doctors to communicate live with a professional UI in Angular 4+ which got almost 100% positive feedback from thousands of users who are using the platform.'
        },
        {
          id: 2,
          details:
            'Ownership of complex web applications with Angular 5+ with SSR to be SEO friendly.'
        },
        {
          id: 3,
          details: 'Further self-development with React and REST API.'
        }
      ]
    }
  },
  {
    id: 3,
    title: 'KolektifLabs',
    slug: 'kolektif-labs',
    category: Category.frontend,
    img: 'kolektif_labs_1.png',
    publishDate: 'January-August, 2017',
    images: [
      {
        id: 31,
        title: 'Kolektiflabs Project',
        img: 'kolektif_labs_1.png'
      },
      {
        id: 32,
        title: 'Kolektiflabs Project',
        img: 'kolektif_labs_2.jpg'
      },
      {
        id: 33,
        title: 'Kolektiflabs Project',
        img: 'mobile-project-2.jpg'
      }
    ],
    info: {
      client: 'About Company',
      companyInfo: [
        {
          id: 1,
          title: 'Name',
          details: 'Kolektiflabs ltd'
        },
        {
          id: 2,
          title: 'Services',
          details: 'Software Agency (Fullstack)'
        },
        {
          id: 3,
          title: 'Website',
          details: 'https://kolektiflabs.com'
        },
        {
          id: 4,
          title: 'Location',
          details: 'San Francisco CA. & Istanbul'
        }
      ],
      title: 'Objective',
      description: 'Software agency that acquires multiple hand on project and gives support.',
      technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'HTML',
            'CSS',
            'JavaScript',
            'Angular 2+',
            'TailwindCSS',
            'Bootstrap',
            'WordPress'
          ]
        }
      ],
      detailTitle: 'Challenge',
      details: [
        {
          id: 1,
          details:
            'Helped seniors to build websites to buy movie theater tickets and view movie details using Angular 2+.'
        },
        {
          id: 2,
          details:
            'Worked with multiple platforms using most popular ui libraries such as Bootstrap.'
        },
        {
          id: 3,
          details: 'Worked with wordpress for tech support.'
        }
      ]
    }
  },
  {
    id: 4,
    title: 'Analizoom',
    slug: 'analizoom',
    category: Category.mobile,
    img: 'analizoom_1.jpg',
    publishDate: 'Feb - August,2022',
    images: [
      {
        id: 41,
        title: 'Analizoom Project',
        img: 'analizoom_1.jpg'
      },
      {
        id: 42,
        title: 'Analizoom Project',
        img: 'analizoom_2.jpg'
      },
      {
        id: 43,
        title: 'Analizoom Project',
        img: 'analizoom_3.jpg'
      }
    ],
    info: {
      client: 'About Client',
      companyInfo: [
        {
          id: 1,
          title: 'Name',
          details: 'Analizoom Ltd'
        },
        {
          id: 2,
          title: 'Services',
          details: 'Stock market consultant'
        },
        {
          id: 4,
          title: 'Work Type',
          details: 'Remote & Freelance'
        }
      ],
      title: 'Objective',
      description:
        'Social media platform that helps people to get consultancy about hottest stocks in the market',
      technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'React Native',
            'Typescript',
            'Jest',
            'Web Socket',
            'Google Ad Mob',
            'IOS',
            'Android'
          ]
        }
      ],
      detailTitle: 'Challenge',
      details: [
        {
          id: 1,
          details:
            'Implemented a social media platform that connects stock investors in one platform.'
        },
        {
          id: 2,
          details: 'Special requirements with IOS and Android have been successfully handled.'
        }
      ]
    }
  },
  {
    id: 5,
    title: 'Rental Machines',
    slug: 'rental-machines',
    category: Category.mobile,
    img: 'rental_machines_1.jpg',
    publishDate: 'Jul - Sep, 2022',
    images: [
      {
        id: 51,
        title: 'Rental Machines',
        img: 'rental_machines_1.jpg'
      },
      {
        id: 52,
        title: 'Rental Machines',
        img: 'rental_machines_2.png'
      },
      {
        id: 53,
        title: 'Rental Machines',
        img: 'mobile-project-2.jpg'
      }
    ],
    info: {
      client: 'About Client',
      companyInfo: [
        {
          id: 2,
          title: 'Services',
          details: 'Quick Machine Rentals'
        },
        {
          id: 4,
          title: 'Work Type',
          details: 'Remote & Freelance'
        }
      ],
      title: 'Objective',
      description:
        'The company provides a mobile platform which enables users to rent their equipments for their construction projects as quick as possible.',
      technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['React Native', 'JavaScript', '#NET']
        }
      ],
      detailTitle: 'Challenge',
      details: [
        {
          id: 1,
          details:
            'Multiple requirements of everything about machine rentals are achieved such as location machines, construction site, renting and managing these rentals.'
        },
        {
          id: 2,
          details: 'It is implemented with React Native using a design from scratch.'
        }
      ]
    }
  },
  {
    id: 6,
    title: 'Starter Kit (Native Base)',
    slug: 'native-base-starter-kit',
    category: Category.mobile,
    img: 'starter_kit_1.png',
    publishDate: '2021-2022',
    images: [
      {
        id: 61,
        title: 'Starter Kit (Native Base)',
        img: 'starter_kit_1.png'
      },
      {
        id: 62,
        title: 'Starter Kit (Native Base)',
        img: 'starter_kit_2.png'
      },
      {
        id: 63,
        title: 'Starter Kit (Native Base)',
        img: 'starter_kit_3.png'
      },
      {
        id: 64,
        title: 'Starter Kit (Native Base)',
        img: 'starter_kit_4.png'
      },
      {
        id: 65,
        title: 'Starter Kit (Native Base)',
        img: 'starter_kit_5.png'
      },
      {
        id: 66,
        title: 'Starter Kit (Native Base)',
        img: 'starter_kit_6.png'
      }
    ],
    info: {
      client: 'About The Project',
      companyInfo: [
        {
          id: 1,
          title: 'Work Type',
          details: 'Personal Project'
        },
        {
          id: 2,
          title: 'Services',
          details: 'UI Design & Mobile Development'
        },
        {
          id: 3,
          title: 'Phone',
          details: '+491782944572'
        }
      ],
      title: 'Objective',
      description:
        'As a personal project, I created a scalable and adjustable starter kit for all kinds of needs for a banking app where you can manage your transfers, cards, payments.',
      technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'React Native',
            'Sketch',
            'Typescript',
            'React',
            'Native Base',
            'Express.js',
            'Node.js'
          ]
        }
      ],
      detailTitle: 'Challenge',
      details: [
        {
          id: 1,
          details: 'Created a design for a wallet mobile application from scratch using sketch.'
        },
        {
          id: 2,
          details:
            'JSON server api with express.js to perform CRUD actions with adjustable base path and attributes.'
        },
        {
          id: 3,
          details:
            'Implemented a scalable react & react native mobile application that is ready to be published or continued.'
        },
        {
          id: 4,
          details: 'Created reusable ui elements for the needs.'
        }
      ]
    }
  }
]
