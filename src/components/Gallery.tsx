import img1 from "../assets/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-1.png";
import img2 from "../assets/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-2.png";
import img3 from "../assets/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-3.png";
import img4 from "../assets/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-4.png";
import img5 from "../assets/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-5.png";
import img6 from "../assets/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-6.png";
import img7 from "../assets/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-7.png";
import img8 from "../assets/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-8.png";
import img9 from "../assets/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-9.png";
import img10 from "../assets/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-10.png";
import img11 from "../assets/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-11.png";
import img12 from "../assets/gallery/pmu-brows-by-amber-powder-brow-benicia-ca-12.png";

const images = [
  img1,img2,img3,img4,img5,img6,
  img7,img8,img9,img10,img11,img12
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#F6EFE8] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-900">
            Powder Brows Gallery
          </h2>
          <p className="text-stone-600 mt-4">
            Real client results from Brows by Amber in Benicia, California.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >

              <img
                src={image}
                alt={`Powder brows by Amber in Benicia California result ${index + 1}`}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-white text-sm font-medium">
                  Powder Brows • Benicia CA
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
