const AnnouncementCard = ({ title, description }) => {
    return (
      <div className="p-4 bg-blue-100 rounded-lg shadow-sm">
        <h3 className="font-bold text-lg text-blue-900">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    );
  };

  export default AnnouncementCard;