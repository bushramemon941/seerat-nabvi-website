"use client"


import Image from 'next/image';

export default function BookGallery() {
  return (
    <section id="books" className="my-8 ">
      <h2 className="text-3xl font-bold text-center mb-6 uppercase underline">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Book 1 */}
        <div className="group relative">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/img/book1.jpeg"
              alt="Seerat E Nabwi"
              width={600}
              height={400}
              objectFit="cover"
              className="w-full h-[500px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center">
    <h3 className="text-white text-2xl font-bold">سیرت النبی ﷺ اور ہماری زندگ</h3>
    <p className="text-white mt-2 text-center">مؤلّف</p>
    <p className="text-white mt-2 text-sm">
      جسٹس مولانا محمد تقی عثمانی مدظلہم سیرت طیبہ کے نام پر منعقد ہونے والی محفلوں میں عین محفل کے دوران ہم ایسے کام کرتے ہیں جو سرکار دو عالم محمد مصطفی ﷺ کے ارشادات کے قطعی خلاف ہیں۔
    </p>
  </div>
        </div>
        
        {/* Book 2 */}
        <div className="group relative">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/img/book2.jpg"
              alt="Khatam E Nabuwat"
              width={600}
              height={400}
              objectFit="cover"
              className="w-full h-[500px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center">
    <h3 className="text-white text-2xl font-bold">ڈاکٹحضرتر محمد عبدا لحئی عارف
    </h3>
    <p className="text-white mt-2 text-center">مؤلّف</p>
    <p className="text-white mt-2 text-sm">
    حضرت ڈاکٹر محمد عبدا لحئی عارفیؒ
    حدیث کی مستند کتابوں سے رسول اللہﷺکے شمائل و خصائل کو جمع کرکے انسانی زندگی کے ہر پہلو، ہر شعبہ اور ہر حال کے متعلق ہدایات پیش کی گئی ہیں جن سے اتّباعِ سُنّت اور اتّباعِ رسول ﷺ کا صحیح مفہوم متعین ہوجائے </p>
  </div>
        </div>
        
    
          
        {/* Book 3 */}
        <div className="group relative">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/img/book3.png"
              alt="Khatam E Nabuwat"
              width={600}
              height={400}
              objectFit="cover"
              className="w-full h-[500px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center">
    <h3 className="text-white text-2xl font-bold text-center">سیرۃحلبِیہ</h3>
    <p className="text-white mt-2 text-center">مؤلّف</p>
    <p className="text-white mt-2 text-sm">
    زیر سرپرستی
مولانا قاری محمد طیب صاحب ؒ
سیرت النبی ﷺ کی نہایت مفصل و مستند تصنیف
    </p>
  </div>
        </div>
      </div>
    </section>
  );
}
