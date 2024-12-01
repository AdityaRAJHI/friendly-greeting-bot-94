import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const TopFansSection = () => {
  const navigate = useNavigate();

  const handleTopFansClick = () => {
    navigate("/top-fans");
  };

  return (
    <div className="p-4 bg-white mt-2">
      <div 
        className="flex justify-between items-center mb-4 cursor-pointer" 
        onClick={handleTopFansClick}
      >
        <h2 className="text-lg font-semibold">Top Fans</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-pink-500">2.4K</span>
          <ChevronRight className="text-gray-400" />
        </div>
      </div>
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop" />
          <AvatarFallback>Fan1</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop" />
          <AvatarFallback>Fan2</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=64&h=64&fit=crop" />
          <AvatarFallback>Fan3</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};