"use client"
interface BookCardProps {
    imgSrc: string;
    title: string;
    author: string;
    description: string;
  }
  
  export default function BookCard({ imgSrc, title, author, description }: BookCardProps) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg ">
        <img src={imgSrc} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{author}</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  }
  