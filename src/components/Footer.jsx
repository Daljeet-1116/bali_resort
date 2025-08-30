export default function Footer() {
  return (
    <footer className="bg-black text-gray-200 px-6 sm:px-10 py-10 sm:py-12">
     
      <div className="bg-gray-900 text-white py-4 sm:py-6 px-4 text-center mb-6 sm:mb-8 cursor-pointer hover:bg-gray-700 text-base sm:text-lg">
        Reserve &rarr;
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-sm sm:text-base">
       
        <div>
          <h2 className="font-bold mb-2 text-lg sm:text-xl">AYANA BALI</h2>
          <div className="border-b border-gray-700 mb-4"></div>

          <div className="mb-4 hover:underline">
            <h3 className="font-semibold">Hotels</h3>
            <ul className="ml-2 mt-1 space-y-1">
              <li>AYANA BALI VILLAS</li>
              <li>AYANA BALI SEGARA</li>
              <li>AYANA BALI RESORT</li>
              <li>AYANA BALI RIMBA</li>
            </ul>
          </div>

          <div className="mb-6 hover:underline">
            <h3 className="font-semibold">Dining</h3>
            <ul className="ml-2 mt-1 space-y-1">
              <li>Restaurant & Café/Bar List</li>
              <li>Rock Bar</li>
            </ul>
          </div>
        </div>

   
        <div>
          <h3 className="font-semibold mb-2">Spa</h3>
          <ul className="ml-2 mb-4 space-y-1">
            <li>Spa Menu</li>
          </ul>

          <h3 className="font-semibold mb-2">Experiences</h3>
          <ul className="ml-2 mb-4 space-y-1">
            <li>Pools, Activities & Facilities</li>
          </ul>

          <h3 className="font-semibold mb-2">Weddings</h3>
          <h3 className="font-semibold mb-2">Meetings</h3>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Offers</h3>
          <h3 className="font-semibold mb-2">Resort Map</h3>
          <h3 className="font-semibold mb-2">Curated Journeys</h3>
          <h3 className="font-semibold mb-2">Access</h3>
          <h3 className="font-semibold mb-2">Support</h3>
          <h3 className="font-semibold mb-2">Residences</h3>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-xs sm:text-sm gap-4">
   
        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
          <span className="hover:underline">Instagram</span>
          <span className="hover:underline">Facebook</span>
          <span className="hover:underline">Youtube</span>
          <span className="hover:underline">TikTok</span>
          <span className="hover:underline">Tripadvisor</span>
        </div>

       
        <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4">
          <span className="hover:underline">BALI</span>
          <span className="hover:underline">KOMODO</span>
          <span className="hover:underline">JAKARTA</span>
          <span className="hover:underline">CRUISE</span>
        </div>
      </div>

 
      <div className="mt-6 text-center text-gray-500 text-xs sm:text-sm hover:underline">
        Privacy Policy | Careers | Pressroom &copy; AYANA
      </div>
    </footer>
  );
}
