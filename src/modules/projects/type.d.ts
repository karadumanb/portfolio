declare interface Project {
  id: number
  title: string
  img: string
  url: string
  category: string
  publishDate: string
  tags: string
  images: ProjectImage[]
  info: ProjectInfo
}

declare interface ProjectImage {
  id: number
  title: string
  img: string
}

declare interface ProjectInfo {
  client: string
  title: string
  description: string
  detailTitle: string
  details: ProjectDetail[]
  technologies: Technology[]
  companyInfo: Company[]
}

declare interface Company {
  id: number
  title: string
  details: string
}

declare interface Technology {
  title: string
  techs: string[]
}

declare interface ProjectDetail {
  id: number
  details: string
}