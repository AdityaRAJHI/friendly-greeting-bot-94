import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const AlbumSection = () => {
  const navigate = useNavigate();

  const handleAlbumClick = () => {
    navigate("/album");
  };

  return (
    <div 
      className="p-4 bg-white mt-2 cursor-pointer"
      onClick={handleAlbumClick}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Album</h2>
        <ChevronRight className="text-gray-400" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <img 
          src="/lovable-uploads/90afbedf-8b27-4541-944b-65560586c183.png" 
          alt="Album photo 1" 
          className="w-full h-24 object-cover rounded-lg"
        />
        <img 
          src="/lovable-uploads/90afbedf-8b27-4541-944b-65560586c183.png" 
          alt="Album photo 2" 
          className="w-full h-24 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};