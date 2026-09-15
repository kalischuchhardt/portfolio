import { Card, CardBody, CardHeader, Divider, Button, Chip, Tooltip } from '@heroui/react'
import { Github, ExternalLink, Star } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'An amazing project showcasing modern React patterns and TypeScript best practices.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    featured: true,
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A full-stack application demonstrating API design and database architecture.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
    featured: true,
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'An e-commerce platform with payment integration and real-time updates.',
    tech: ['Vue', 'Firebase', 'Stripe'],
    featured: false,
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'An interactive 3D visualization dashboard with real-time data rendering.',
    tech: ['React', 'Three.js', 'WebGL'],
    featured: true,
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'A real-time collaboration tool with WebSockets and cloud synchronization.',
    tech: ['React', 'Socket.io', 'MongoDB'],
    featured: false,
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'A data analytics dashboard with interactive charts and filtering capabilities.',
    tech: ['React', 'D3.js', 'Express'],
    featured: false,
    demoLink: '#',
    codeLink: '#',
  },
]

export function Projects() {
  return (
    <section className="min-h-screen py-20 px-4" style={{ backgroundColor: '#D9BFB1' }}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center" style={{ color: '#5E5946' }}>My Projects</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              style={{ backgroundColor: '#F0DED0', borderColor: '#D9BFB1' }} 
              className="border hover:shadow-lg transition-all cursor-pointer"
              isPressable
            >
              <CardHeader className="flex justify-between gap-3">
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold" style={{ color: '#5E5946' }}>{project.title}</p>
                    {project.featured && (
                      <Tooltip content="Featured project">
                        <Star size={18} style={{ color: '#AE887B' }} fill="#AE887B" />
                      </Tooltip>
                    )}
                  </div>
                </div>
              </CardHeader>
              <Divider style={{ backgroundColor: '#E7E5D9' }} />
              <CardBody>
                <p className="mb-4" style={{ color: '#5E5946' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Chip 
                      key={tech}
                      size="sm"
                      variant="flat"
                      style={{ backgroundColor: '#E7E5D9', color: '#5E5946' }}
                    >
                      {tech}
                    </Chip>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    as="a"
                    href={project.demoLink}
                    size="sm"
                    variant="bordered"
                    style={{ borderColor: '#AE887B', color: '#AE887B' }}
                    endContent={<ExternalLink size={16} />}
                  >
                    Demo
                  </Button>
                  <Button 
                    as="a"
                    href={project.codeLink}
                    size="sm"
                    style={{ backgroundColor: '#AE887B', color: '#F0DED0' }}
                    endContent={<Github size={16} />}
                  >
                    Code
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
