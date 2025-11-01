import React from "react";
import { Globe } from "lucide-react";

const Sponsors = () => {
  const sponsors = [
    {
      name: "Unstop",
      logo: "https://static-asset.inc42.com/logo/unstop.png",
      description: "Early talent platform connecting students with opportunities and challenges.",
      website: "https://unstop.com/",
    },
    {
      name: "Wake and Bake Cafe",
      logo: "https://ind.5bestincity.com/profileimages/india/wake-and-bake-cafe-cafes-shimla-himachal-pradesh/32431-1a39e-1.jpg",
      description: "Cozy Shimla café known for great food, coffee, and scenic views.",
      website: "https://www.wakeandbakecafe.in/highlights.html",
    },
  ];

  const SponsorCard = ({ sponsor }: { sponsor: any }) => (
    <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-glow-cyan">
      <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-muted">
        <img
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {sponsor.name}
      </h3>
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
      <section className="py-16 bg-secondary/30 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground tracking-tight">
            Our Sponsors
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are grateful to our sponsors who make ARRIVAL possible
          </p>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
