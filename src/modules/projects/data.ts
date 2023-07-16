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
        id: 1,
        title: 'Klarx Main Photo',
        img: 'klarx_1.png'
      },
      {
        id: 2,
        title: 'Klarx App',
        img: 'klarx_2.png'
      },
      {
        id: 3,
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
        id: 1,
        title: 'Kolektiflabs Project',
        img: 'kolektif_labs_1.png'
      },
      {
        id: 2,
        title: 'Kolektiflabs Project',
        img: 'kolektif_labs_2.jpg'
      },
      {
        id: 3,
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
        id: 1,
        title: 'Analizoom Project',
        img: 'analizoom_1.jpg'
      },
      {
        id: 2,
        title: 'Analizoom Project',
        img: 'analizoom_2.jpg'
      },
      {
        id: 3,
        title: 'Analizoom Project',
        img: 'mobile-project-2.jpg'
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
          details: 'Special requirements with IOS and Android have been overcome'
        }
      ]
    }
  },
  {
    id: 5,
    title: 'HEEVI',
    slug: 'heevi',
    category: Category.mobile,
    img: 'mobile-project-1.jpg',
    publishDate: 'Jul 26, 2021',
    images: [
      {
        id: 999,
        title: 'HEEVI',
        img: 'ui-project-1.jpg'
      },
      {
        id: 999,
        title: 'HEEVI',
        img: 'web-project-2.jpg'
      },
      {
        id: 999,
        title: 'HEEVI',
        img: 'mobile-project-2.jpg'
      }
    ],
    info: {
      client: 'About Client',
      companyInfo: [
        {
          id: 999,
          title: 'Name',
          details: 'Company Ltd'
        },
        {
          id: 999,
          title: 'Services',
          details: 'UI Design & Frontend Development'
        },
        {
          id: 999,
          title: 'Website',
          details: 'https://company.com'
        },
        {
          id: 999,
          title: 'Phone',
          details: '555 8888 888'
        }
      ],
      title: 'Objective',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
      technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'TailwindCSS', 'AdobeXD']
        }
      ],
      detailTitle: 'Challenge',
      details: [
        {
          id: 999,
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.'
        },
        {
          id: 999,
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?'
        },
        {
          id: 999,
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?'
        },
        {
          id: 999,
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.'
        }
      ]
    }
  },
  {
    id: 6,
    title: 'Starter Kit (Native Base)',
    slug: 'native-base-starter-kit',
    category: Category.mobile,
    img: 'web-project-1.jpg',
    publishDate: 'Jul 26, 2021',
    images: [
      {
        id: 999,
        title: 'Starter Kit (Native Base)',
        img: 'ui-project-1.jpg'
      },
      {
        id: 999,
        title: 'Starter Kit (Native Base)',
        img: 'web-project-2.jpg'
      },
      {
        id: 999,
        title: 'Starter Kit (Native Base)',
        img: 'mobile-project-2.jpg'
      }
    ],
    info: {
      client: 'About Client',
      companyInfo: [
        {
          id: 999,
          title: 'Name',
          details: 'Company Ltd'
        },
        {
          id: 999,
          title: 'Services',
          details: 'UI Design & Frontend Development'
        },
        {
          id: 999,
          title: 'Website',
          details: 'https://company.com'
        },
        {
          id: 999,
          title: 'Phone',
          details: '555 8888 888'
        }
      ],
      title: 'Objective',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
      technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'TailwindCSS', 'AdobeXD']
        }
      ],
      detailTitle: 'Challenge',
      details: [
        {
          id: 999,
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.'
        },
        {
          id: 999,
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?'
        },
        {
          id: 999,
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?'
        },
        {
          id: 999,
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.'
        }
      ]
    }
  }
]
