import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t">
      <div className="flex justify-around p-2">
        <Button 
          variant="ghost" 
          className="flex-col gap-1 hover:bg-transparent"
          onClick={() => navigate("/room")}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <img 
              src="/lovable-uploads/party.png" 
              alt="Room" 
              className="w-5 h-5 object-contain"
            />
          </div>
          <span className="text-xs text-gray-600">Party</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex-col gap-1 hover:bg-transparent"
          onClick={() => navigate("/")}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <img 
              src="/lovable-uploads/moment.png" 
              alt="Moment" 
              className="w-5 h-5 object-contain"
            />
          </div>
          <span className="text-xs text-gray-600">Moment</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex-col gap-1 hover:bg-transparent relative"
          onClick={() => navigate("/sing")}
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center -mt-5">
            <img 
              src="/lovable-uploads/mic.png" 
              alt="Sing" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-xs text-green-500 absolute bottom-0">Sing</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex-col gap-1 hover:bg-transparent"
          onClick={() => navigate("/chat")}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <img 
              src="/lovable-uploads/chat.png" 
              alt="Chat" 
              className="w-5 h-5 object-contain"
            />
          </div>
          <span className="text-xs text-gray-600">Chat</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex-col gap-1 hover:bg-transparent"
          onClick={() => navigate("/profile")}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <img 
              src="/lovable-uploads/profile.png" 
              alt="Profile" 
              className="w-5 h-5 object-contain"
            />
          </div>
          <span className="text-xs text-gray-600">Me</span>
        </Button>
      </div>
    </div>
  );
};