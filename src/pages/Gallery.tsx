import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery items (each with an image URL)
  const galleryItems = [
    {
      id: 1,
      title: "Arrival",
      image: "/posters/arrival.png",
    },
    {
      id: 2,
      title: "Cryptic Quest",
      image: "/posters/cryptic.png",
    },
    {
      id: 3,
      title: "Capture the Flag",
      image: "/posters/ctf.png",
    },
    {
      id: 4,
      title: "Cyber Session",
      image: "/posters/cyber.png",
    },
    {
      id: 5,
      title: "Coding Face Off",
      image: "/posters/faceOff.png",
    },
    {
      id: 6,
      title: "Jamming Night",
      image: "/posters/jamming.png",
    },
    {
      id: 7,
      title: "Mesh Minds",
      image: "/posters/mesh.png",
    },
    {
      id: 8,
      title: "Innovate with Nvidia",
      image: "/posters/nvidia.png",
    },
    {
      id: 9,
      title: "Speaker Session",
      image: "/posters/speaker.png",
    },
    {
      id: 10,
      title: "Wikipedia Race",
      image: "/posters/wiki.png",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing the moments that matter
          </p>
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
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <h3 className="text-lg font-semibold mb-1 text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            <div
              className="max-w-5xl w-full rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[selectedImage].image}
                alt={galleryItems[selectedImage].title}
                className="w-full h-auto object-contain"
              />
              <div className="p-4 text-center text-white bg-black/70">
                <h3 className="text-2xl font-bold mb-1">
                  {galleryItems[selectedImage].title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
