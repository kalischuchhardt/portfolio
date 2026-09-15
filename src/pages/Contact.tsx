import { Button, Card, CardBody, Divider, Input, Textarea, Tooltip, Link } from '@heroui/react'
import { Mail, Linkedin, Github, Twitter, Send, Phone } from 'lucide-react'

export function Contact() {
  return (
    <section className="min-h-screen py-20 px-4 flex items-center" style={{ backgroundColor: '#E7E5D9' }}>
      <div className="max-w-4xl mx-auto w-full text-center space-y-8">
        <div>
          <h1 className="text-5xl font-bold mb-4" style={{ color: '#5E5946' }}>Get In Touch</h1>
          <p className="text-xl" style={{ color: '#AE887B' }}>
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out!
          </p>
        </div>
        
        <Card style={{ backgroundColor: '#F0DED0', borderColor: '#D9BFB1' }} className="border">
          <CardBody className="px-6 py-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#AE887B' }}>Quick Contact</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    size="lg"
                    style={{ backgroundColor: '#E7E5D9' }}
                    classNames={{
                      input: "text-black",
                      label: "text-black",
                    }}
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    size="lg"
                    style={{ backgroundColor: '#E7E5D9' }}
                    classNames={{
                      input: "text-black",
                      label: "text-black",
                    }}
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Subject"
                  size="lg"
                  style={{ backgroundColor: '#E7E5D9' }}
                  classNames={{
                    input: "text-black",
                    label: "text-black",
                  }}
                />
                <Textarea
                  placeholder="Your message..."
                  size="lg"
                  minRows={5}
                  style={{ backgroundColor: '#E7E5D9' }}
                  classNames={{
                    input: "text-black",
                    label: "text-black",
                  }}
                />
                <Button 
                  size="lg"
                  style={{ backgroundColor: '#AE887B', color: '#F0DED0' }}
                  className="font-semibold w-full"
                  endContent={<Send size={20} />}
                >
                  Send Message
                </Button>
              </form>
            </div>

            <Divider style={{ backgroundColor: '#D9BFB1' }} className="my-6" />

            <div>
              <h3 className="text-xl font-semibold mb-6" style={{ color: '#5E5946' }}>Other Ways to Connect</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Tooltip content="Send me an email">
                  <Button 
                    as={Link}
                    href="mailto:your.email@example.com"
                    size="lg"
                    variant="bordered"
                    isExternal
                    className="font-semibold"
                    style={{ borderColor: '#AE887B', color: '#AE887B' }}
                    endContent={<Mail size={20} />}
                  >
                    Email
                  </Button>
                </Tooltip>
                <Tooltip content="Connect on LinkedIn">
                  <Button 
                    as={Link}
                    href="https://linkedin.com"
                    size="lg"
                    variant="bordered"
                    isExternal
                    className="font-semibold"
                    style={{ borderColor: '#AE887B', color: '#AE887B' }}
                    endContent={<Linkedin size={20} />}
                  >
                    LinkedIn
                  </Button>
                </Tooltip>
                <Tooltip content="Check my GitHub">
                  <Button 
                    as={Link}
                    href="https://github.com"
                    size="lg"
                    variant="bordered"
                    isExternal
                    className="font-semibold"
                    style={{ borderColor: '#AE887B', color: '#AE887B' }}
                    endContent={<Github size={20} />}
                  >
                    GitHub
                  </Button>
                </Tooltip>
              </div>
            </div>

            <Divider style={{ backgroundColor: '#D9BFB1' }} className="my-6" />

            <div className="space-y-4">
              <h3 className="text-xl font-semibold" style={{ color: '#5E5946' }}>Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card style={{ backgroundColor: '#E7E5D9', borderColor: '#D9BFB1' }} className="border">
                  <CardBody className="text-center space-y-2">
                    <Mail style={{ color: '#AE887B' }} size={24} className="mx-auto" />
                    <p className="text-sm" style={{ color: '#AE887B' }}>Email</p>
                    <Link 
                      href="mailto:your.email@example.com"
                      className="font-semibold"
                      style={{ color: '#5E5946' }}
                    >
                      your.email@example.com
                    </Link>
                  </CardBody>
                </Card>
                <Card style={{ backgroundColor: '#E7E5D9', borderColor: '#D9BFB1' }} className="border">
                  <CardBody className="text-center space-y-2">
                    <Linkedin style={{ color: '#AE887B' }} size={24} className="mx-auto" />
                    <p className="text-sm" style={{ color: '#AE887B' }}>LinkedIn</p>
                    <Link 
                      href="https://linkedin.com"
                      isExternal
                      className="font-semibold"
                      style={{ color: '#5E5946' }}
                    >
                      Profile Link
                    </Link>
                  </CardBody>
                </Card>
                <Card style={{ backgroundColor: '#E7E5D9', borderColor: '#D9BFB1' }} className="border">
                  <CardBody className="text-center space-y-2">
                    <Github style={{ color: '#AE887B' }} size={24} className="mx-auto" />
                    <p className="text-sm" style={{ color: '#AE887B' }}>GitHub</p>
                    <Link 
                      href="https://github.com"
                      isExternal
                      className="font-semibold"
                      style={{ color: '#5E5946' }}
                    >
                      GitHub Profile
                    </Link>
                  </CardBody>
                </Card>
              </div>
            </div>

            <Divider style={{ backgroundColor: '#D9BFB1' }} className="my-6" />

            <p className="text-sm" style={{ color: '#AE887B' }}>
              ⏱️ Response time: Usually within 24 hours
            </p>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}
