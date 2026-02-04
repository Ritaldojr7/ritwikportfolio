const About = () => {
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-left mx-0 py-[25px] px-[10px] font-medium">Hi, I'm Ritwik — an AI and software development enthusiast who loves turning ambitious ideas into clean, scalable products. From emotion-detecting apps to AI chatbots that probably talk too much, I build tools that solve real problems with a touch of personality.</p>
              
              <p className="text-lg text-muted-foreground leading-relaxed text-left mx-0 py-[25px] px-[10px] font-medium mt-4">Currently decoding AI mysteries and crafting software solutions at VIT, with a focus on health tech, NLP, and intelligent systems that (mostly) behave.</p>
              
              
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
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium">AI Automation Engineer</p>
                    <p className="text-muted-foreground">Frido</p>
                    <p className="text-muted-foreground">October 2025 – Present</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Data Science Intern</p>
                    <p className="text-muted-foreground">Zidio Development Pvt. Ltd.</p>
                    <p className="text-muted-foreground">March 2025 – June 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="glass-card p-8 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">10+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;