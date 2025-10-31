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
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 text-outline-thick tracking-tight drop-shadow-[0_0_30px_rgba(52,211,235,0.5)]">
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
              <p className="text-muted-foreground">7 Nov to 9 Nov</p>
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
              { 
                title: "HACKATHON", 
                desc: "A thrilling 24-hour marathon starting at 12 PM where innovation meets endurance! Turn bold ideas into real-world solutions through creativity, collaboration, and cutting-edge technology addressing modern challenges." 
              },
              { 
                title: "CODING FACEOFF", 
                desc: "An intense competitive programming event testing logic, speed, and problem-solving skills. Tackle progressively complex problems demanding precision, creativity, and efficiency under pressure." 
              },
              { 
                title: "CYBER SESSION", 
                desc: "Dive into cybersecurity fundamentals with this engaging workshop. Learn ethical hacking, digital forensics, and online security from experts to defend against today's evolving digital threats." 
              },
              { 
                title: "CAPTURE THE FLAG", 
                desc: "A 12-hour cybersecurity marathon! Test your ethical hacking, cryptography, and web security skills by uncovering hidden flags and solving complex puzzles. Only the sharpest minds prevail!" 
              },
              { 
                title: "IOT IDEATHON", 
                desc: "Where creativity meets technology! Teams brainstorm and pitch innovative Internet of Things solutions to real-world challenges—from smart cities to sustainable tech." 
              },
              { 
                title: "IOT SESSION", 
                desc: "Explore connected technology possibilities in this insightful workshop. Learn about IoT systems, sensors, and real-time applications to turn ideas into smart solutions." 
              },
              { 
                title: "WIKIPEDIA RACE", 
                desc: "A fast-paced competition where participants race through Wikipedia pages to reach a target topic using the fewest clicks possible. Quick thinking and clever navigation win!" 
              },
              { 
                title: "MOVIE NIGHT", 
                desc: "Unwind with a cozy gathering that brings the community together through film. Enjoy a cinematic experience filled with laughter, emotion, and great company under the stars." 
              },
              { 
                title: "CRYPTIC QUEST", 
                desc: "Embark on an exhilarating journey through riddles, codes, and mysteries! This mind-bending challenge tests your wit and teamwork as you decode your way to the finish line." 
              },
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
