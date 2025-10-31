import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  // Set event date to November 7, 2025
  const eventDate = new Date('2025-11-07T00:00:00');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Event hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-outline-thick tracking-tight drop-shadow-[0_0_30px_rgba(52,211,235,0.5)]">
              ARRIVAL
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-2xl mx-auto">
              Experience the Future of Innovation and Technology
            </p>

            {/* Countdown Timer */}
            <div className="mb-12">
              <h2 className="text-lg md:text-xl text-muted-foreground mb-6 uppercase tracking-wider">
                Event Starts In
              </h2>
              <CountdownTimer targetDate={eventDate} />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 shadow-glow-cyan animate-pulse-glow">
                Register Now
              </Button>
              <Link to="/about">
                <Button size="lg" variant="secondary">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Calendar className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Date</h3>
              <p className="text-muted-foreground">
                {eventDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <MapPin className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Venue</h3>
              <p className="text-muted-foreground">JUIT, Solan</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Participants</h3>
              <p className="text-muted-foreground">200+ Expected Attendees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            Event Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Tech Workshops", desc: "Hands-on sessions with industry experts" },
              { title: "Coding Competition", desc: "Showcase your programming skills" },
              { title: "Guest Speakers", desc: "Learn from tech industry leaders" },
              { title: "Networking", desc: "Connect with peers and professionals" },
              { title: "Innovation Showcase", desc: "Present your groundbreaking ideas" },
              { title: "Cultural Events", desc: "Evening entertainment and performances" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-glow-cyan animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
