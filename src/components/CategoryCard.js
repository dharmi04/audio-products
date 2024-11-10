// components/CategoryCard.js

export default function CategoryCard({ imageSrc, label }) {
    return (
      <div className="flex flex-col items-center mt-6 font-poppins">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center shadow-md mb-2">
          <img src={imageSrc} alt={label} className="w-22 h-22 object-contain mb-16" />
        </div>
        <p className="text-sm font-medium text-gray-700">{label}</p>
      </div>
    );
  }
  