import { Button, Image, Card, CardBody, Chip, Tooltip, Badge } from '@heroui/react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

export function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#F0DED0' }}>
      <div className="text-center space-y-6 max-w-3xl">
        <Badge 
          content="Available for work"
          color="success"
          variant="flat"
          className="mx-auto"
        >
          <Image 
            isZoomed
            alt="Profile"
            className="w-32 h-32 border-4 rounded-full mx-auto"
            style={{ borderColor: '#AE887B' }}
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Portfolio"
          />
        </Badge>
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: '#5E5946' }}>
            Hi, I'm Your Name
          </h1>
          <p className="text-xl md:text-2xl" style={{ color: '#AE887B' }}>
            Full Stack Developer | React Enthusiast | UI/UX Designer
          </p>
        </div>

        <div className="flex gap-2 justify-center flex-wrap">
          <Chip 
            startContent="⚛️"
            variant="flat"
            style={{ backgroundColor: '#E7E5D9', color: '#5E5946' }}
          >
            React Expert
          </Chip>
          <Chip 
            startContent="🎨"
            variant="flat"
            style={{ backgroundColor: '#E7E5D9', color: '#5E5946' }}
          >
            UI Designer
          </Chip>
          <Chip 
            startContent="💻"
            variant="flat"
            style={{ backgroundColor: '#E7E5D9', color: '#5E5946' }}
          >
            Full Stack
          </Chip>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            as={Link}
            to="/projects"
            size="lg"
            className="font-semibold"
            style={{ backgroundColor: '#AE887B', color: '#F0DED0' }}
            endContent={<ArrowRight size={20} />}
          >
            View My Work
          </Button>
          <Tooltip content="Visit my GitHub">
            <Button 
              isIconOnly
              as="a"
              href="https://github.com"
              target="_blank"
              variant="bordered"
              size="lg"
              style={{ borderColor: '#AE887B', color: '#AE887B' }}
            >
              <Github size={24} />
            </Button>
          </Tooltip>
          <Tooltip content="Connect on LinkedIn">
            <Button 
              isIconOnly
              as="a"
              href="https://linkedin.com"
              target="_blank"
              variant="bordered"
              size="lg"
              style={{ borderColor: '#AE887B', color: '#AE887B' }}
            >
              <Linkedin size={24} />
            </Button>
          </Tooltip>
          <Tooltip content="Send me an email">
            <Button 
              isIconOnly
              as="a"
              href="mailto:your.email@example.com"
              variant="bordered"
              size="lg"
              style={{ borderColor: '#AE887B', color: '#AE887B' }}
            >
              <Mail size={24} />
            </Button>
          </Tooltip>
        </div>

        <Card style={{ backgroundColor: '#E7E5D9', borderColor: '#D9BFB1' }} className="border mt-8">
          <CardBody>
            <p className="text-sm" style={{ color: '#5E5946' }}>
              🚀 Building beautiful, responsive web applications with modern technologies
            </p>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}
