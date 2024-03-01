





export default function Hotels({makkahHotel, madinahHotel, makkahHotelstars, madinahHotelstars, makkahPic, madinahPic, makkahDist, madinahDist, makkahMap, madinahMap}) {
    return (
      (<div className="max-w-8xl  mx-auto my-8 space-y-8">
        <div className="bg-white lg:w-[850px] md:w-auto  rounded-lg shadow-lg p-6 ">
          <div className="flex flex-col  md:items-center md:justify-between">
            <h2 className="text-md tracking-tight font-semibold text-center">Hotel in Makkah</h2>
            <h3 className="text-2xl tracking-wide font-bold mt-2 md:mt-0 text-center">{makkahHotel}</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:justify-normal md:justify-center lg:grid-cols-2 gap-4">
            <img
              alt="Le Meredien Makkah"
              className="rounded-lg"
              
              src={makkahPic}
              style={{
               height:"250px",
               aspectRatio: "500/250",
                objectFit: "cover",
              }}
              
             />
            <div className="md:pl-6">
            <iframe className="h-[250px] w-full  "   src={makkahMap}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2 mt-6">
            <StarIcon className="text-yellow-400 w-5 h-5" />
            <span className="text-sm font-semibold">{makkahHotelstars} Star</span>
            <LocateIcon className="text-gray-700 w-5 h-5" />
            <span className="text-sm font-semibold">{makkahDist}</span>
          </div>
        </div>
  
        <div className="bg-white lg:w-[850px] md:w-auto rounded-lg shadow-lg p-6 ">
          <div className="flex flex-col  md:items-center md:justify-between">
            <h2 className="text-md tracking-tight font-semibold text-center">Hotel in Madinah</h2>
            <h3 className="text-2xl tracking-wide font-bold mt-2 md:mt-0 text-center">{madinahHotel}</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              alt="Royal Al Nokbah"
              className="rounded-lg"
              
              src={madinahPic}
              style={{
               height:"250px",
                objectFit: "cover",
              }}
              width="500" 
             />
            <div className="md:pl-6 ">
            <iframe className="h-[250px] w-full "   src={madinahMap}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2 mt-6">
            <StarIcon className="text-yellow-400 w-5 h-5" />
            <span className="text-sm font-semibold">{madinahHotelstars} Star</span>
            <LocateIcon className="text-gray-700 w-5 h-5" />
            <span className="text-sm font-semibold">{madinahDist}</span>
          </div>
        </div>
      </div>)
    );
  }
  
  
  function StarIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>)
    );
  }
  
  
  function LocateIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <line x1="2" x2="5" y1="12" y2="12" />
        <line x1="19" x2="22" y1="12" y2="12" />
        <line x1="12" x2="12" y1="2" y2="5" />
        <line x1="12" x2="12" y1="19" y2="22" />
        <circle cx="12" cy="12" r="7" />
      </svg>)
    );
  }