import { Target, Lightbulb, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About ARRIVAL
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just an event - it's a celebration of innovation, technology, and creativity
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              ARRIVAL is the premier college event that brings together students, innovators, and industry leaders
              for an unforgettable experience of learning, competition, and networking. Our mission is to inspire
              the next generation of tech pioneers and create a platform where ideas come to life.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Over the course of three action-packed days, participants will engage in cutting-edge workshops,
              thrilling competitions, inspiring keynote sessions, and collaborative projects that push the
              boundaries of what's possible in technology and innovation.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 animate-slide-in-left">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower students with knowledge, skills, and connections that will shape their future
              in the technology industry.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Lightbulb className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To become the most anticipated college tech event that bridges the gap between academic
              learning and industry innovation.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 animate-slide-in-right">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Trophy className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              Innovation, collaboration, excellence, and inclusivity drive everything we do at ARRIVAL.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-primary p-12 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-black mb-2 text-primary-foreground">
                500+
              </div>
              <div className="text-primary-foreground/80">Participants</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-black mb-2 text-primary-foreground">
                20+
              </div>
              <div className="text-primary-foreground/80">Events</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-black mb-2 text-primary-foreground">
                15+
              </div>
              <div className="text-primary-foreground/80">Speakers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-black mb-2 text-primary-foreground">
                3
              </div>
              <div className="text-primary-foreground/80">Days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
