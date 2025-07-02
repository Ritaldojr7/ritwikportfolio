
import { Button } from '@/components/ui/button';

const Resume = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gradient">
            Resume
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Download my resume to learn more about my experience, education, and achievements.
          </p>
          
          <div className="glass-card p-8 rounded-lg">
            <div className="mb-6">
              <div className="w-16 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">PDF</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ritwik Mukherjee - Resume</h3>
              <p className="text-muted-foreground">Updated December 2024</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                onClick={() => {
                  window.open('https://drive.google.com/uc?export=download&id=1OKuRoxoZtrh9tAlMrRg-NSMGbY5AGlWa', '_blank');
                }}
              >
                Download Resume
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-primary/10"
                onClick={() => {
                  window.open('https://drive.google.com/file/d/1OKuRoxoZtrh9tAlMrRg-NSMGbY5AGlWa/preview', '_blank');
                }}
              >
                View Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
