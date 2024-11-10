"use client"
import Image from 'next/image';


export default function Gallery() {
  return (
    
    <section id="gallery" className="my-8 ">
    <h2 className="text-3xl font-bold text-center mb-6 uppercase underline">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        {/* Map through images */}
        {['/img/vector-99-names-allah-god-260nw-1645473580.webp', '/img/99-names-of-holy-prophet-muhammad-saw-vector-23226253.jpg', '/img/pic2.jpg', '/img/images.jpeg', '/img/photo-1511652019870-fbd8713560bf.avif','/img/istockphoto-501201344-612x612.webp'].map((src, idx) => (
          <div key={idx} className="group relative w-full h-[300px]">
            <Image
              src={src}
              alt="Gallery image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-70 rounded-lg transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>

  );
}
