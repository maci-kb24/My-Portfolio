import njlawyers from '../public/njlawyers.png'
import skylog from '../public/sky_log.png'
type Project = {
  label: string
  description: string
  link: string
  github_label: string
  github_link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    label: 'Njlawyers',
    description:
      'Wordpress CMS, custom theme and plugins, custom post types, and custom fields.',
    link: 'https://njlawyers.com.au/',
    github_label: 'Github',
    github_link: 'https://github.com/ibelick/njlawyers',
    image: njlawyers.src,
    id: 'project1',
  },
  {
    label: 'Sky Log',
    description: 'Wordpress CMS, custom development',
    link: 'https://new.marketingtodo.es/',
    image: skylog.src,
    github_label: 'Github',
    github_link: 'https://github.com/ibelick/motion-primitives',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/maci-kb24',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/marjan-stojanovski/',
  },
]

export const EMAIL = 'marjankb24@gmail.com'
