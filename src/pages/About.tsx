import { Card, CardBody, Chip, Tabs, Tab } from '@heroui/react'

const skills = {
  frontend: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Hero UI', 'Next.js'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
  tools: ['Git', 'Vite', 'Docker', 'GitHub', 'VSCode', 'Figma']
}

export function About() {
  return (
    <section className="min-h-screen py-20 px-4" style={{ backgroundColor: '#E7E5D9' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center" style={{ color: '#5E5946' }}>About Me</h1>
        
        <Card style={{ backgroundColor: '#F0DED0', borderColor: '#D9BFB1' }} className="border mb-8">
          <CardBody className="px-6 py-8 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#AE887B' }}>Who I Am</h2>
              <p className="text-lg leading-relaxed" style={{ color: '#5E5946' }}>
                I'm a passionate developer with a love for creating beautiful, functional web experiences. 
                With expertise in React, TypeScript, and modern web technologies, I build scalable applications 
                that solve real problems.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#AE887B' }}>My Journey</h2>
              <p className="text-lg leading-relaxed" style={{ color: '#5E5946' }}>
                Started my programming journey with a curiosity for how things work on the web. Over the years, 
                I've grown into a full-stack developer, working on projects ranging from simple websites to 
                complex applications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#AE887B' }}>What I Do</h2>
              <p className="text-lg leading-relaxed" style={{ color: '#5E5946' }}>
                I specialize in building modern web applications with React and TypeScript. I'm passionate about 
                clean code, best practices, and creating intuitive user experiences.
              </p>
            </div>
          </CardBody>
        </Card>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold" style={{ color: '#5E5946' }}>Skills & Technologies</h2>
          <Card style={{ backgroundColor: '#F0DED0', borderColor: '#D9BFB1' }} className="border">
            <CardBody className="px-6 py-8">
              <Tabs 
                aria-label="Skills"
                style={{ backgroundColor: 'transparent' }}
              >
                <Tab key="frontend" title="Frontend" className="w-full">
                  <div className="flex flex-wrap gap-2 p-4">
                    {skills.frontend.map((skill) => (
                      <Chip 
                        key={skill}
                        startContent="⚛️"
                        style={{ backgroundColor: '#E7E5D9', color: '#5E5946' }}
                        variant="flat"
                      >
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </Tab>
                <Tab key="backend" title="Backend" className="w-full">
                  <div className="flex flex-wrap gap-2 p-4">
                    {skills.backend.map((skill) => (
                      <Chip 
                        key={skill}
                        startContent="🔧"
                        style={{ backgroundColor: '#E7E5D9', color: '#5E5946' }}
                        variant="flat"
                      >
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </Tab>
                <Tab key="tools" title="Tools & DevOps" className="w-full">
                  <div className="flex flex-wrap gap-2 p-4">
                    {skills.tools.map((skill) => (
                      <Chip 
                        key={skill}
                        startContent="🛠️"
                        style={{ backgroundColor: '#E7E5D9', color: '#5E5946' }}
                        variant="flat"
                      >
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  )
}
