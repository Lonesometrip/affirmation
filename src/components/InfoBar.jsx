import React from 'react';

const InfoBar = () => {
  return (
    <div className="bg-gray-50 py-2 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center">
          <div className="flex items-center px-3 py-1 mx-1 my-1">
            <i className="fas fa-route text-gray-500 mr-2"></i>
            <span className="text-sm text-gray-600">Flexibles Reisen</span>
          </div>

          <div className="flex items-center px-3 py-1 mx-1 my-1">
            <i className="fas fa-briefcase text-gray-500 mr-2"></i>
            <span className="text-sm text-gray-600">Travelmanagement</span>
          </div>

          <div className="flex items-center px-3 py-1 mx-1 my-1">
            <i className="fas fa-leaf text-gray-500 mr-2"></i>
            <span className="text-sm text-gray-600">100% CO2 neutral</span>
          </div>

          <div className="flex items-center px-3 py-1 mx-1 my-1">
            <i className="fas fa-shield-alt text-gray-500 mr-2"></i>
            <span className="text-sm text-gray-600">Sicher ans Ziel</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
