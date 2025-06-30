
const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I started my software journey from photography. Through that, I learned to 
                love the process of creating from scratch. Since then, this has led me to 
                software development as it fulfills my love for learning and building things.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing B.Tech in Computer Science at Vellore Institute of Technology, 
                I specialize in Health Informatics and AI-driven healthcare applications with a 
                passion for creating scalable, production-ready solutions.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-2">
                  <p className="font-medium">B.Tech in Computer Science</p>
                  <p className="text-muted-foreground">Vellore Institute of Technology</p>
                  <p className="text-muted-foreground">Graduating 2026 | CGPA 8.64</p>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <div className="space-y-2">
                  <p className="font-medium">Data Science Intern</p>
                  <p className="text-muted-foreground">Zidio Development Pvt. Ltd.</p>
                  <p className="text-muted-foreground">March 2025 – June 2025</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass-card p-8 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-gradient mb-2">15+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="glass-card p-8 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-gradient mb-2">3+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="glass-card p-8 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-gradient mb-2">100%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
