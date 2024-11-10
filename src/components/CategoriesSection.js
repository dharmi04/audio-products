// pages/index.js
import CategoryCard from './CategoryCard';

export default function CategoriesSection() {
  const categories = [
    { imageSrc: '/Images/audio.png', label: 'Audio' },
    { imageSrc: '/Images/vision.png', label: 'Vision' },
    { imageSrc: '/Images/OEM.png', label: 'OEM' },
    { imageSrc: '/Images/vision.png', label: 'Vision' },
    { imageSrc: '/Images/audio.png', label: 'Audio' },
    { imageSrc: '/Images/OEM.png', label: 'OEM' },
    { imageSrc: '/Images/audio.png', label: 'Audio' },
    { imageSrc: '/Images/vision.png', label: 'Vision' },
  ];

  return (
    <div className="px-4 py-8 md:px-8 lg:px-16">
      <h2 className="text-xl font-bold mb-6">Shop by <span className="font-semibold">Categories</span></h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category, index) => (
          <CategoryCard key={index} imageSrc={category.imageSrc} label={category.label} />
        ))}
      </div>
    </div>
  );
}
