import Image from "next/image";

export default function Houses() {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">House Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Image
            src="/house-detail.jpg" // Use a detailed image from your public folder
            alt="House Detail"
            width={600}
            height={400}
            className="rounded"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Elegant House</h2>
          <p>
            This house offers a comfortable living experience with modern
            amenities, free WiFi, fully furnished interiors, and more.
          </p>
          <h3 className="text-xl font-semibold mt-4">Amenities</h3>
          <ul className="list-disc ml-6">
            <li>Modern Kitchen</li>
            <li>Comfortable Bedrooms</li>
            <li>Spacious Living Room</li>
            <li>Private Garden</li>
          </ul>
        </div>
      </div>
    </section>
  );
}