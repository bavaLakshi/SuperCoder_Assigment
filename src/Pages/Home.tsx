import mainbg from '../assets/hero_section.png';
import Header from '../Pages/Header';
import coat from '../assets/coat.jpg';
import dots from '../assets/Dots.png';
import model1 from '../assets/model1.png';
import model2 from '../assets/model2.png';
import model3 from '../assets/model3.png';
import model4 from '../assets/model4.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import instagram from '../assets/instagram.png';

const coatCategory = {
  name: (
    <div className="flex flex-col items-start space-y-1 text-left">
      <span className="text-xs sm:text-sm text-gray-800 leading-snug">
        The product name is displayed...
      </span>
      <span className="text-xs sm:text-sm text-gray-800 leading-snug">
        Nike Group Code - Color Name
      </span>
      <span className="text-xs sm:text-sm text-gray-800 leading-snug">
        Warehouse Name
      </span>
      <span className="text-xs sm:text-sm text-black font-semibold">
        (6 characters) 000,000 KRW
      </span>
    </div>
  ),
  image: coat,
};

const categories = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  ...coatCategory,
}));

const models = [
  { id: 1, image: model1 },
  { id: 2, image: model2 },
  { id: 3, image: model3 },
  { id: 4, image: model4 },
];

const Home = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Header />

    
      <section className="relative w-full">
        <img
          src={mainbg}
          className="w-full h-[180px] sm:h-[250px] md:h-[400px] lg:h-[600px] object-cover object-center"
          alt="Hero"
        />
      </section>

    
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-10">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center md:text-left mb-4 pl-2 sm:pl-4 md:pl-6 lg:pl-8">
  Performance-Ready Apparel for Work & Beyond
</h3>


        <div className="pt-2">
        
          <div className="flex md:hidden gap-3 overflow-x-auto px-2 snap-x snap-mandatory scroll-smooth">
            {models.map(({ id, image }) => (
              <div
                key={id}
                className="min-w-[160px] sm:min-w-[200px] h-[240px] sm:h-[300px] bg-white border rounded-lg shadow-sm flex-shrink-0 snap-start"
              >
                <img
                  src={image}
                  alt={`Model ${id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

       
          <div className="hidden md:flex flex-wrap gap-6 items-end px-4 md:px-8 lg:px-12 pt-6">
            {models.map(({ id, image }, index) => {
              const isLast = index === models.length - 1;
              return (
                <div
                  key={id}
                  className={`bg-white border rounded-lg overflow-hidden shadow-sm flex flex-col ${
                    isLast ? 'w-[240px] h-[450px]' : 'w-[240px] h-[370px]'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Model ${id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

     
  <section className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 md:px-8 lg:px-16">
  <h3 className="text-sm sm:text-base font-semibold mb-2 text-center">
    The product display includes a title
  </h3>
  <h3 className="text-sm sm:text-base font-semibold mb-6 text-center">
    If a subtitle is needed, text is included.
  </h3>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {categories.map(cat => (
      <div
        key={cat.id}
        className="bg-white rounded-md shadow-sm p-4 flex flex-col"
      >
        <div className="w-full aspect-[4/3] overflow-hidden">
          <img
            src={cat.image}
            alt="Product"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col mt-4">
          <div className="w-full mb-2">
            <img
              src={dots}
              className="w-40 h-4 object-contain"
              alt="Dots"
            />
          </div>

          <div className="text-left space-y-1 text-[10px] sm:text-[11px] md:text-xs leading-snug text-gray-800">
            <div>The product name is displayed...</div>
            <div>Nike Group Code - Color Name</div>
            <div>Warehouse Name</div>
            <div className="font-semibold text-black text-[11px] sm:text-[12px] md:text-sm">
              (6 characters) 000,000 KRW
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

<section className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 md:px-8 lg:px-16">
  <h3 className="text-sm sm:text-base font-semibold mb-2 text-center">
    The product display includes a title
  </h3>
  <h3 className="text-sm sm:text-base font-semibold mb-6 text-center">
    If a subtitle is needed, text is included.
  </h3>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {categories.map(cat => (
      <div
        key={cat.id}
        className="bg-white rounded-md shadow-sm p-4 flex flex-col"
      >
        <div className="w-full aspect-[4/3] overflow-hidden">
          <img
            src={cat.image}
            alt="Product"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col mt-4">
          <div className="w-full mb-2">
            <img
              src={dots}
              className="w-40 h-4 object-contain"
              alt="Dots"
            />
          </div>

          <div className="text-left space-y-1 text-[10px] sm:text-[11px] md:text-xs leading-snug text-gray-800">
            <div>The product name is displayed...</div>
            <div>Nike Group Code - Color Name</div>
            <div>Warehouse Name</div>
            <div className="font-semibold text-black text-[11px] sm:text-[12px] md:text-sm">
              (6 characters) 000,000 KRW
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>




<section className="bg-black text-white text-left max-w-6xl mx-auto mb-10 py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
  <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold leading-relaxed">
    B2B apparel shopping mall! <br />
    Trade with confidence, backed by over 15 years of expertise. <br />
    Trusted by countless businesses. <br />
    Discover it now.
  </h2>
</section>


   
      <footer className="bg-[#1A1A1A] text-white py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div>
            <h3 className="font-bold mb-2">LANDAS</h3>
            <h4 className="font-semibold mb-2">Business Info</h4>
            <p className="text-xs sm:text-sm">CEO: Park Jongjin</p>
            <p className="text-xs sm:text-sm">Business Reg. No: 201-86-15245</p>
            <p className="text-xs sm:text-sm">Address: 13 Dasan-ro, Jung-gu, Seoul, 8F</p>
            <p className="text-xs sm:text-sm">Sales Report No: Jung-gu 03038</p>
            <p className="text-xs sm:text-sm">Privacy Officer: Park Jongjin</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Customer Service</h4>
            <p className="text-xs sm:text-sm">Phone: 1661-6244</p>
            <p className="text-xs sm:text-sm">Hours: Weekdays 09:00–18:00</p>
            <p className="text-xs sm:text-sm">Fax: 213-11172-04035</p>
          </div>

      <div>
  <h4 className="font-semibold mb-2">Follow Us</h4>
  <div className="flex space-x-4 items-center">
    <p className="text-xs sm:text-sm flex items-center gap-2">
      <img src={instagram} alt="Instagram" className="w-4 h-4" />
      
    </p>
    <p className="text-xs sm:text-sm flex items-center gap-2">
      <img src={facebook} alt="Facebook" className="w-4 h-4" />
      
    </p>
    <p className="text-xs sm:text-sm flex items-center gap-2">
      <img src={youtube} alt="YouTube" className="w-4 h-4" />
      
    </p>
  </div>
</div>

        </div>

        <div className="mt-6 text-center text-[10px] sm:text-xs text-gray-400">
          © LANDAS Corp. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
