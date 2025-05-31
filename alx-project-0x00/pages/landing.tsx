import React from 'react';
import Card from "@/components/Card";
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
	<Card />

	{/* Small buttons */}
      <div className="mt-4 space-x-2">
        <Button 
          title="Small / Rounded-sm" 
          styles="px-2 py-1 bg-blue-500 text-white text-sm rounded-sm"
	/>
    </div>
  );
};

export default Landing;
