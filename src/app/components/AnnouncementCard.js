import React from 'react';

export const AnnouncementCard = ({ title, description, isRead, onClick }) => {
  return (
    <div
      className={`relative border p-4 rounded-lg hover:shadow-lg transition-shadow cursor-pointer ${
        isRead ? 'bg-gray-200' : 'bg-white'
      }`}
      onClick={onClick}
    >
      {!isRead && (
        <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full"></div>
      )}
      <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
