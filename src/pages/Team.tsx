import { Mail, Linkedin } from "lucide-react";

const Team = () => {
  const clubs = [
    {
      name: "SIAM",
      members: [
        { name: "Ritik Joshi", role: "President", email: "sarah.j@college.edu" },
        { name: "Nandaya Vegad", role: "Vice President", email: "rahul@college.edu" },
        { name: "Suhani Saini", role: "Secretary", email: "priya@college.edu" },
        { name: "Sameeksha Shakya", role: "Joint Secretary", email: "arjun@college.edu" },
        { name: "Aenansh Mittal", role: "Treasurer", email: "sneha@college.edu" },
        { name: "Omansh Sharma", role: "Webmaster", email: "vikram@college.edu" },
        { name: "Devansh Kalia", role: "Research Head", email: "ananya@college.edu" },
        { name: "Vansh Soni", role: "Public Relations Head", email: "rohan@college.edu" },
        { name: "Manya Sethi", role: "Operations Head", email: "rohan@college.edu" },
      ],
    },
    {
      name: "IEEE",
      members: [
        { name: "Prof. Michael Chen", role: "Faculty Coordinator", email: "m.chen@college.edu" },
        { name: "Amit Joshi", role: "Chairperson", email: "amit@college.edu" },
        { name: "Pooja Iyer", role: "Vice Chairperson", email: "pooja@college.edu" },
        { name: "Karan Malhotra", role: "Secretary", email: "karan@college.edu" },
        { name: "Divya Nair", role: "Treasurer", email: "divya@college.edu" },
        { name: "Siddharth Rao", role: "Technical Head", email: "siddharth@college.edu" },
        { name: "Riya Desai", role: "Event Manager", email: "riya@college.edu" },
        { name: "Aditya Sharma", role: "Logistics Lead", email: "aditya@college.edu" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated individuals making ARRIVAL possible
          </p>
        </div>

        {/* Club Sections */}
        <div className="space-y-16">
          {clubs.map((club, clubIndex) => (
            <div key={clubIndex} className="animate-fade-in" style={{ animationDelay: `${clubIndex * 0.1}s` }}>
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">
                {club.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {club.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="bg-card rounded-lg border border-border p-6 hover:border-primary transition-all duration-300 hover:shadow-glow-cyan group"
                  >
                    {/* Avatar Placeholder */}
                    <div className="w-40 h-40 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    {/* Member Info */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{member.role}</p>

                      {/* Contact Links */}
                      <div className="flex gap-3 justify-center">
                        <a
                          href={`mailto:${member.email}`}
                          className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail size={16} />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={`LinkedIn profile of ${member.name}`}
                        >
                          <Linkedin size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
