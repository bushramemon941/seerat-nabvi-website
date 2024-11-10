import BookList from "../../components/booklist"; // Adjust the import path as needed

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100">
      
      <main className="p-8 back">
       
        {/* Here we add the BookList component */}
        <BookList />
      </main>

    
    </div>
  );
}
