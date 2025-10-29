import { Mail, Linkedin } from "lucide-react";

const Team = () => {
  const teamCategories = [
    {
      title: "Faculty Coordinators",
      members: [
        { name: "Dr. Sarah Johnson", role: "Faculty Advisor", email: "sarah.j@college.edu" },
        { name: "Prof. Michael Chen", role: "Technical Coordinator", email: "m.chen@college.edu" },
      ],
    },
    {
      title: "Core Organizing Committee",
      members: [
        { name: "Rahul Sharma", role: "Event Head", email: "rahul@college.edu" },
        { name: "Priya Patel", role: "Co-Event Head", email: "priya@college.edu" },
        { name: "Arjun Mehta", role: "Technical Lead", email: "arjun@college.edu" },
        { name: "Sneha Reddy", role: "Operations Manager", email: "sneha@college.edu" },
      ],
    },
    {
      title: "Technical Team",
      members: [
        { name: "Vikram Singh", role: "Web Development Lead", email: "vikram@college.edu" },
        { name: "Ananya Gupta", role: "App Development Lead", email: "ananya@college.edu" },
        { name: "Rohan Kumar", role: "Design Lead", email: "rohan@college.edu" },
        { name: "Neha Verma", role: "Technical Support", email: "neha@college.edu" },
      ],
    },
    {
      title: "Marketing & PR Team",
      members: [
        { name: "Amit Joshi", role: "Marketing Head", email: "amit@college.edu" },
        { name: "Pooja Iyer", role: "Social Media Lead", email: "pooja@college.edu" },
        { name: "Karan Malhotra", role: "Content Head", email: "karan@college.edu" },
        { name: "Divya Nair", role: "PR Coordinator", email: "divya@college.edu" },
      ],
    },
    {
      title: "Logistics & Operations",
      members: [
        { name: "Siddharth Rao", role: "Logistics Head", email: "siddharth@college.edu" },
        { name: "Riya Desai", role: "Venue Coordinator", email: "riya@college.edu" },
        { name: "Aditya Sharma", role: "Registration Lead", email: "aditya@college.edu" },
        { name: "Kavya Menon", role: "Hospitality Head", email: "kavya@college.edu" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-primary bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated individuals making ARRIVAL possible
          </p>
        </div>

        {/* Team Categories */}
        <div className="space-y-16">
          {teamCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h2 className="text-3xl font-bold mb-8 text-center text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {category.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="bg-card rounded-lg border border-border p-6 hover:border-primary transition-all duration-300 hover:shadow-glow-cyan group"
                  >
                    {/* Avatar Placeholder */}
                    <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary-foreground">
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

        {/* Join Team CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-lg bg-card border border-primary/50">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Want to Join Our Team?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              We're always looking for passionate volunteers to help make ARRIVAL even better
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
