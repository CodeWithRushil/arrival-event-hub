import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery items (each with an image URL)
  const galleryItems = [
    {
      id: 1,
      title: "Auctionomics",
      image: "/gallery/1.jpg",
    },
    {
      id: 2,
      title: "Auctionomics",
      image: "/gallery/2.jpeg",
    },
    {
      id: 3,
      title: "Auctionomics",
      image: "/gallery/3.jpg",
    },
    {
      id: 4,
      title: "Auctionomics",
      image: "/gallery/4.jpeg",
    },
    {
      id: 5,
      title: "Council",
      image: "/gallery/5.jpg",
    },
    {
      id: 6,
      title: "Winners of Auctionomics",
      image: "/gallery/6.jpeg",
    },
    {
      id: 7,
      title: "MatLab Session",
      image: "/gallery/7.jpg",
    },
    {
      id: 8,
      title: "MatLab Session",
      image: "/gallery/8.jpeg",
    },
    {
      id: 9,
      title: "Dr. Mahesh",
      image: "/gallery/9.jpg",
    },
    {
      id: 10,
      title: "Dr. Mahesh",
      image: "/gallery/10.jpeg",
    },
    {
      id: 11,
      title: "C Session",
      image: "/gallery/11.jpg",
    },
    {
      id: 12,
      title: "C Session",
      image: "/gallery/12.jpeg",
    },
    {
      id: 13,
      title: "C Session",
      image: "/gallery/13.jpg",
    },
    {
      id: 14,
      title: "C Session",
      image: "/gallery/14.jpg",
    },
    {
      id: 15,
      title: "C Session",
      image: "/gallery/15.jpeg",
    },
    {
      id: 16,
      title: "C Session",
      image: "/gallery/16.jpg",
    },
    {
      id: 17,
      title: "C Session",
      image: "/gallery/17.jpeg",
    },
    {
      id: 18,
      title: "C Session",
      image: "/gallery/18.jpg",
    },
    {
      id: 19,
      title: "C Session",
      image: "/gallery/19.jpg",
    },
    {
      id: 20,
      title: "C Session",
      image: "/gallery/20.jpg",
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
