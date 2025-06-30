
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
          {/* Profile Image Upload */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl animate-float">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Ritwik Mukherjee" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">R</span>
                  </div>
                )}
              </div>
              
              <label className="absolute inset-0 cursor-pointer flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">Upload Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Ritwik Mukherjee
          </h1>
          
          <div className="text-2xl md:text-3xl text-gradient font-semibold mb-6">
            Software & Machine Learning Engineer
          </div>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about creating scalable, production-ready AI and software systems. Specializing in 
            Health Informatics and AI-driven healthcare applications with expertise in Machine Learning, 
            Biomedical Image Analysis, and Full-Stack Development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
