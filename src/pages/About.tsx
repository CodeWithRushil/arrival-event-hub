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

        {/* About Sections */}
        <div className="space-y-12 mb-16">
          {/* About Arrival */}
          <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-6 text-primary">About ARRIVAL</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  Arrival is an engaging and multifaceted cultural and technical fest that brings together creativity, 
                  collaboration, and innovation under one roof.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  Comprising a diverse array of events, ranging from technical competitions and cultural showcases to 
                  workshops and exhibitions, Arrival serves as a vibrant platform for students to express their talents, 
                  exchange ideas, and explore new dimensions of learning and entertainment. Each segment of the fest is 
                  crafted to highlight a unique facet of student excellence: from showcasing artistic brilliance and 
                  technical ingenuity to fostering teamwork and leadership.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  In essence, Arrival is more than just an annual fest—it's a celebration of passion, diversity, and 
                  the ever-evolving spirit of the student community, where innovation meets inspiration and ideas come to life.
                </p>
              </div>
            </div>
          </div>

          {/* About SIAM */}
          <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-6 text-primary">About SIAM JUIT</h2>
              <p className="text-sm text-muted-foreground mb-4 italic">Organizing Club</p>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  The Society for Industrial and Applied Mathematics (SIAM) is a global community of over 14,000 
                  individual members and nearly 500 institutional members, dedicated to advancing the application of 
                  mathematics and computational science to real-world problems. By fostering collaboration among 
                  mathematicians, engineers, scientists, and researchers, SIAM plays a vital role in promoting 
                  innovation and practical solutions that impact diverse fields such as data science, engineering, 
                  economics, and technology.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  SIAM-JUIT, the sixth official student chapter in India, proudly follows in the footsteps of 
                  prestigious institutions like IISc Bangalore, DTU Delhi, and IIT Guwahati. The chapter is a vibrant 
                  platform for students to bridge the gap between theoretical knowledge and industrial applications. 
                  SIAM-JUIT encourages interdisciplinary learning and cultivates a spirit of inquiry among young researchers.
                </p>
              </div>
            </div>
          </div>

          {/* About IEEE */}
          <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-6 text-primary">About IEEE JUIT</h2>
              <p className="text-sm text-muted-foreground mb-4 italic">Organizing Club</p>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  The IEEE JUIT Student Branch emerges as an innovative and dynamic channel of the IEEE organization, 
                  committed to realizing its global mission of fostering technological excellence and professional growth. 
                  Its goals, which are both scientific and educational in nature, are directed towards advancing the 
                  theory and practice of electrical, electronic communication, computer science, and engineering disciplines.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  At JUIT, the branch serves as a vibrant platform that connects passionate students, researchers, and 
                  technologists, encouraging them to explore, innovate, and collaborate. Through various workshops, 
                  technical talks, hackathons, and collaborative projects, the IEEE JUIT Student Branch nurtures 
                  creativity and bridges the gap between academic learning and industry practices. IEEE JUIT stands as 
                  a community of forward-thinking individuals united by curiosity and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-primary p-12 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-black mb-2 text-primary-foreground">
                200+
              </div>
              <div className="text-primary-foreground/80">Participants</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-black mb-2 text-primary-foreground">
                10+
              </div>
              <div className="text-primary-foreground/80">Events</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-black mb-2 text-primary-foreground">
                ₹ 40,000+
              </div>
              <div className="text-primary-foreground/80">Prize Pool</div>
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
