import { Mail, Linkedin } from "lucide-react";

const Team = () => {
  const clubs = [
    {
      name: "SIAM",
      members: [
        { name: "Ritik Joshi", role: "President", email: "sarah.j@college.edu", image: "Ritik.JPG" },
        { name: "Nandaya Vegad", role: "Vice President", email: "rahul@college.edu", image: "Nandaya_Vegad.jpg" },
        { name: "Suhani Saini", role: "Secretary", email: "priya@college.edu", image: "Suhani_Saini.jpg" },
        { name: "Sameeksha Shakya", role: "Joint Secretary", email: "arjun@college.edu", image: "Sameeksha_Shakya.jpg" },
        { name: "Aenansh Mittal", role: "Treasurer", email: "sneha@college.edu", image: "Aenansh_Mittal.jpg" },
        { name: "Omansh Sharma", role: "Webmaster", email: "vikram@college.edu", image: "Omansh_Sharma.jpg" },
        { name: "Devansh Kalia", role: "Research Head", email: "ananya@college.edu", image: "Devansh.JPG" },
        { name: "Vansh Soni", role: "Public Relations Head", email: "rohan@college.edu", image: "Vansh.JPG" },
        { name: "Manya Sethi", role: "Operations Head", email: "rohan@college.edu", image: "Manya_Sethi.jpg" },
      ],
    },
    {
  name: "IEEE",
  members: [
    {
      name: "Harshit Goyal",
      role: "Chairperson",
      email: "harshitgoyal718@gmail.com",
      linkedin: "https://www.linkedin.com/in/harshitgoyal001/",
      instagram: "https://www.instagram.com/harshitgoyal625/",
      image: "Harshit_Goyal.JPG"
    },
    {
      name: "Jayendra Singh",
      role: "Vice Chairperson",
      email: "jay290120@gmail.com",
      linkedin: "https://www.linkedin.com/in/jayendrasingh29/",
      instagram: "https://www.instagram.com/jayendra_k98/",
      image: "Jayendra_Singh.jpg"
    },
    {
      name: "Nandini Singh",
      role: "Secretary",
      email: "nandinisingh3563@gmail.com",
      linkedin: "https://www.linkedin.com/in/nandini-singh-b258062b0",
      instagram: "https://www.instagram.com/nandinisingh004?igsh=MTNmbjA0OWkxdTU5cg==",
      image: "Nandini_Singh.jpg"
    },
    {
      name: "Shubham Nagpal",
      role: "Treasurer",
      email: "shubhamnagpal623@gmail.com",
      linkedin: "https://www.linkedin.com/in/shubham-nagpal-691941309/",
      instagram: "https://www.instagram.com/shubham_nagpal__/?hl=en",
      image: "Shubham.JPG"
    },
    {
      name: "Aaditya Shekhar Singh",
      role: "Programming & Public Relation Head",
      email: "aadityashekhar20048@gmail.com",
      linkedin: "https://www.linkedin.com/in/aaditya-shekhar-singh-038612307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/aaditya.shekhar.singh?igsh=MTdhY3d0dzY4bDc2&utm_source=qr",
      image: "Aaditya_Singh.jpg"
    },
    {
      name: "Anwesh Sinha",
      role: "Programming & Public Relation Head",
      email: "anweshsinha2015@gmail.com",
      linkedin: "https://www.linkedin.com/in/anwesh-sinha1/",
      instagram: "https://www.instagram.com/_anvi.96_/#",
      image: "Anwesh_Sinha.jpg"
    },
    {
      name: "Keshav Khandelwal",
      role: "SIGHT Chairperson, Media and Publicity Head",
      email: "kkhandelwal4999@gmail.com",
      linkedin: "https://www.linkedin.com/in/khandelwal005/",
      instagram: "https://www.instagram.com/_mr._khandelwal/",
      image: "Keshav_Khandelwal.jpg"
    },
    {
      name: "Prakhar Kulshrestha",
      role: "SPS Chairperson",
      email: "prakharkul27@gmail.com",
      linkedin: "https://www.linkedin.com/in/prakhar-kulshrestha-461461293",
      instagram: "https://www.instagram.com/_prakhar2712_?igsh=Z2p4YXhsZHc0bjBv",
      image: "Prakhar_Kulshrestha.jpg"
    },
    {
      name: "Shruti Sharma",
      role: "WIE Chairperson & Technical Head",
      email: "shrutisharma132005@gmail.com",
      linkedin: "https://www.linkedin.com/in/shruti-sharma-180286295/",
      instagram: "https://www.instagram.com/_shrugar/",
      image: "Shruti_Sharma.jpg"
    },
    {
      name: "Edann",
      role: "WIE Secretary",
      email: "edannmehra@gmail.com",
      linkedin: "https://www.linkedin.com/in/edann-mehra-27a706319/",
      instagram: "https://www.instagram.com/edann_33266/",
      image: "Edann.jpg"
    },
    {
      name: "Tania Mehta",
      role: "SPS & SIGHT Secretary",
      email: "taniamehta305@gmail.com",
      linkedin: "https://www.linkedin.com/in/taniamehta06/",
      instagram: "https://www.instagram.com/t.a.n.i.a_.3712/",
      image: "Tania_Mehta.png"
    }
  ]
}
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
                    <div className="w-40 h-40 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center overflow-hidden">
  {member.image ? (
    <img
      src={`/${member.image}`}
      alt={member.name}
      className="w-full h-full object-cover"
    />
  ) : (
    <span className="text-4xl font-bold text-primary-foreground">
      {member.name
        .split(' ')
        .map(n => n[0])
        .join('')}
    </span>
  )}
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
