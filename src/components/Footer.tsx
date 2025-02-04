import Link from 'next/link';

const Footer = () => {

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <p>Contact us: info@houserental.com | +1 234 567 890</p>
          </div>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/terms-website" className="hover:underline">
              Terms for Website
            </Link>
            <Link href="/terms-facilities" className="hover:underline">
              Terms for Facilities
            </Link>
            <Link href="/private-policy" className="hover:underline">
              Private Policy
            </Link>
            <button className="hover:underline">
              Newsletter
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 