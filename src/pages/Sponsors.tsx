import { Mail, Globe, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sponsors = () => {
  const sponsors = {
    platinum: [
      {
        name: "Tech Corp",
        logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop",
        description: "Leading technology solutions provider",
        website: "https://techcorp.example.com",
      },
    ],
    gold: [
      {
        name: "Innovation Labs",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=150&fit=crop",
        description: "Research and development company",
        website: "https://innovationlabs.example.com",
      },
      {
        name: "Digital Solutions",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=150&fit=crop",
        description: "Digital transformation experts",
        website: "https://digitalsolutions.example.com",
      },
    ],
    silver: [
      {
        name: "StartUp Hub",
        logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop",
        description: "Startup incubator and accelerator",
        website: "https://startuphub.example.com",
      },
      {
        name: "Code Academy",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=150&fit=crop",
        description: "Programming education platform",
        website: "https://codeacademy.example.com",
      },
      {
        name: "Cloud Systems",
        logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop",
        description: "Cloud infrastructure provider",
        website: "https://cloudsystems.example.com",
      },
    ],
  };

  const SponsorCard = ({ sponsor, tier }: { sponsor: any; tier: string }) => (
    <div className="group p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-glow-cyan animate-fade-in">
      <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-muted">
        <img
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl font-semibold text-foreground">{sponsor.name}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${
          tier === 'platinum' ? 'bg-primary/20 text-primary' :
          tier === 'gold' ? 'bg-accent/20 text-accent' :
          'bg-muted text-muted-foreground'
        }`}>
          {tier.toUpperCase()}
        </span>
      </div>
      <p className="text-muted-foreground text-sm mb-4">{sponsor.description}</p>
      <a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
      >
        <Globe size={16} />
        Visit Website
      </a>
    </div>
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-outline tracking-tight">
            Our Sponsors
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are grateful to our sponsors who make ARRIVAL possible
          </p>
        </div>
      </section>

      {/* Platinum Sponsors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
              Platinum Sponsors
            </h2>
            <p className="text-muted-foreground">Our premier partners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {sponsors.platinum.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="platinum" />
            ))}
          </div>
        </div>
      </section>

      {/* Gold Sponsors */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-accent">
              Gold Sponsors
            </h2>
            <p className="text-muted-foreground">Supporting innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.gold.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="gold" />
            ))}
          </div>
        </div>
      </section>

      {/* Silver Sponsors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Silver Sponsors
            </h2>
            <p className="text-muted-foreground">Valued contributors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.silver.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="silver" />
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Sponsor
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us to reach 500+ students and professionals. Join us in creating an unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90">
              <Mail className="mr-2" size={18} />
              Contact Us
            </Button>
            <Button size="lg" variant="secondary">
              <Phone className="mr-2" size={18} />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
