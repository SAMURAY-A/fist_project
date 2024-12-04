export default function Testimonials() {
  return (
    <div className="relative bg-[#FFF5F5]">
      {/* Wavy top shape */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          className="w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
            c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
            c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-16 max-w-3xl text-center">
        <h3 className="text-lg font-medium text-gray-600 mb-2">Testimonials</h3>
        <h2 className="text-4xl font-bold mb-6">My Happy Clients!</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Aliquip quae scipit eros. Anim commodi maiores pharetra, arcu incidunt, omnis iste incidunt cursus. 
          Officia ea numquam vivamus repellen. Minus fermentum litora.
        </p>
        
        {/* Client testimonial */}
        <div className="flex flex-col items-center">
          <img
            src="https://websitedemos.net/fashion-lifestyle-02/wp-content/uploads/sites/427/2019/01/clients01-free-img.jpg"
            alt="Client testimonial"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h4 className="text-xl font-semibold">Deborah Sims</h4>
        </div>
      </div>
    </div>
  )
}

