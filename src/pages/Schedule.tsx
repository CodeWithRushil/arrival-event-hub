import { Clock } from "lucide-react";

const Schedule = () => {
  const scheduleData = [
    {
      day: "Day 1",
      date: "November 7, 2025",
      events: [
        { time: "02:00 PM", title: "Inauguration", location: "Main Lobby" },
        { time: "02:00 PM", title: "Speaker Session", location: "Main Auditorium" },
        { time: "05:00 PM", title: "Coding Face Off", location: "Main Auditorium" },
        { time: "07:00 PM", title: "Jamming Night", location: "Cafeteria" },
      ],
    },
    {
      day: "Day 2",
      date: "November 8, 2025",
      events: [
        { time: "11:00 AM", title: "Cyber Session", location: "Computer Labs" },
        { time: "02:00 PM", title: "Mesh Minds: Startups", location: "Seminar Hall" },
        { time: "02:00 PM", title: "Capture the Flag", location: "Cafeteria" },
        { time: "02:00 PM", title: "Wikipedia Race", location: "Lab 201" },
        { time: "05:30 PM", title: "Innovate with Nvidia", location: "Exhibition Hall" },
      ],
    },
    {
      day: "Day 3",
      date: "November 9, 2025",
      events: [
        { time: "01:30 PM", title: "Innovate with Nvidia Concludes", location: "Main Hall" },
        { time: "02:00 PM", title: "Cryptic Quest", location: "Auditorium" },
        { time: "05:30 PM", title: "Closing Ceremony", location: "Cafeteria" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Event Schedule
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three days of innovation, learning, and excitement
          </p>
        </div>

        {/* Schedule Timeline */}
        <div className="max-w-5xl mx-auto space-y-12">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="animate-fade-in" style={{ animationDelay: `${dayIndex * 0.1}s` }}>
              {/* Day Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2 text-primary">
                  {day.day}
                </h2>
                <p className="text-muted-foreground">{day.date}</p>
              </div>

              {/* Events */}
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="flex gap-6 p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-glow-cyan group"
                  >
                    {/* Event Details - Left */}
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 text-primary mb-3">
                        <Clock size={18} />
                        <span className="font-semibold">{event.time}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                    </div>

                    {/* Image - Right */}
                    <div className="flex-shrink-0 w-32 h-32 rounded-lg bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/40 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-primary/50">
                        <Clock size={48} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Download CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-lg bg-gradient-primary">
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
              Download Full Schedule
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Get the complete event schedule with all details
            </p>
            <button className="px-6 py-3 bg-background text-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
