
import { Button } from '@/components/ui/button';
import profilePicture from '@/assets/profile-picture.jpg';

const Hero = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-800/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl animate-float">
              <img 
                src={profilePicture} 
                alt="Ritwik Mukherjee" 
                className="w-full h-full object-cover object-[50%_35%]"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Ritwik Mukherjee
          </h1>
          
          <div className="text-2xl md:text-3xl text-gradient font-semibold mb-6">
            Software & AI Automation Engineer
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            I build backend systems that process data, automate repetitive tasks, and generate actionable outputs. 
            My work spans analyzing customer feedback, generating structured reports, and connecting software with 
            ML models. I enjoy solving problems where software, data, and automation come together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
