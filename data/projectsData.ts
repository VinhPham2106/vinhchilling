interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Google Summer Of Code 2024 Project Recap',
    description: `OWTF doesn't stand for "Oh, WTF?" but OWASP Web Testing Framework. During the summer, I worked on improving this project, from fixing serious webapp and dependency bugs to refactoring enumeration plugins to modern standards.
    For more technical details and thoughts, follow the link to my writeup for the project below`,
    imgSrc: '/static/images/GSoCBanner.png',
    href: '/blog/project_blogs/gsoc24',
  },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
