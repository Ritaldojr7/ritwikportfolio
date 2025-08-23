
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Code-Pilot",
      description: "An AI-powered voice coding assistant. Describe coding problems with your voice, get code in multiple languages, and execute JavaScript directly in the browser. Built with Next.js and Firebase.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Gemini", "SQL", "Tailwind CSS"],
      githubUrl: "https://github.com/Ritaldojr7/CodePilot",
      demoUrl: "https://codepilot-backend--codepilot-18mi5.asia-east1.hosted.app/"
    },
    {
      title: "FIX-Pilot",
      description: "Real-time FIX trading dashboard with WebSocket messaging.",
      technologies: ["Python", "SQL", "Redis", "Flask", "WebSocket", "AWS hosting"],
      githubUrl: "https://github.com/Ritaldojr7/FIX-Pilot",
      demoUrl: "http://fix-pi-Publi-yzgQFXFZrZHf-847686880.ap-south-1.elb.amazonaws.com"
    },
    {
      title: "AI-Powered Task Optimizer Desktop App",
      description: "AI-Powered Task Optimizer is a desktop app that analyzes employee emotions in real-time using facial expressions, voice tone, and text. It recommends personalized tasks based on mood, improving productivity and well-being. Built with PyQt5, DeepFace, BERT, and MFCC for emotion detection and task suggestion.",
      technologies: ["Python", "Tkinter", "ML", "SQLite"],
      githubUrl: "https://github.com/Ritaldojr7/AI-Powered-Task-Optimizer-Desktop-App",
      demoUrl: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="glass-card p-6 rounded-lg hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className={`${project.demoUrl ? 'flex-1' : 'w-full'} hover:bg-primary/10`}
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    GitHub
                  </Button>
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg hover:bg-primary/10"
              onClick={() => window.open('https://github.com/Ritaldojr7', '_blank')}
            >
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
