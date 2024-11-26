import { Home, Music2, Mic2, MessageCircle, User2 } from "lucide-react";
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
              src="/lovable-uploads/7b2c046b-0e45-400c-a926-9cef66a039bc.png" 
              alt="Room" 
              className="w-5 h-5 object-contain"
            />
          </div>
          <span className="text-xs text-gray-600">Room</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex-col gap-1 hover:bg-transparent"
          onClick={() => navigate("/")}
        >
          <Music2 className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600">Moment</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex-col gap-1 hover:bg-transparent"
          onClick={() => navigate("/sing")}
        >
          <Mic2 className="w-6 h-6 text-green-500" />
          <span className="text-xs text-green-500">Sing</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex-col gap-1 hover:bg-transparent"
          onClick={() => navigate("/chat")}
        >
          <MessageCircle className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600">Chat</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex-col gap-1 hover:bg-transparent"
          onClick={() => navigate("/profile")}
        >
          <User2 className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600">Me</span>
        </Button>
      </div>
    </div>
  );
};