import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder gallery items
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Event Moment ${i + 1}`,
    category: i % 3 === 0 ? "Workshop" : i % 3 === 1 ? "Competition" : "Networking",
  }));

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-primary bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing the moments that matter
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {["All", "Workshop", "Competition", "Networking"].map((filter, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(index)}
            >
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/40" />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <h3 className="text-lg font-semibold mb-2 text-center">{item.title}</h3>
                <span className="text-sm text-primary">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            <div className="max-w-5xl w-full aspect-video rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/40 via-accent/30 to-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    {galleryItems[selectedImage].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {galleryItems[selectedImage].category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Load More Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
