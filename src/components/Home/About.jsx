import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-white py-20">
      <div className="container">
        <p className="font-libre">Great Style For Everyone</p>
        <h2 className="text-5xl max-w-[800px]">
          I Love to Help People Feel Great about How They Look.
        </h2>
      </div>

      <div className="container bg-primary-500 h-[570px] my-28 flex ">
        <div className="flex gap-10 justify-between" >
          <div className="relative">
            <img
              className="max-w-[1000px] h-[720px] w-full mt-[-80px]"
              src="https://websitedemos.net/fashion-lifestyle-02/wp-content/uploads/sites/427/2020/01/the-model.jpg"
              alt="girl"
            />
          </div>
          <div className="text-white flex flex-col max-w-[500px] w-full py-[100px]">
            <h3 className="text-[25px] font-libre">
              Discover Your Personal Style and the Confidence That Comes with
              It.
            </h3>
            <p className="mt-5 mb-16">
              Tempora aliqua cillum accusamus aperiam pharetra cupidatat
              fermentum viverra delectus quidem incidunt tempus itaque quam, id
              blandit dolores, proin reiciendis. Nostrum proin sem veniam
              veritatis inceptos!
            </p>
            <Link to="/" className="border border-white px-7 py-3 w-44">
              <i className="fa fa-arrow-right me-2"></i>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}
