
 import Seerat from "@/components/seerat";
 import Khatam from "@/components/khatm";
 import BookList from "@/components/booklist";
 import Gallery from "@/components/gallery";
 import ContactForm from "@/components/contact";

export default function Home() {
  return (
    <div className="back" >

     <Seerat/>
     <Khatam/>
     <Gallery/>
     <BookList/>
     <ContactForm/>
     
    </div>
  );
}
