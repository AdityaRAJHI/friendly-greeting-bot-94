import { Home, Music2, Mic2, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t">
      <div className="flex justify-around p-2">
        <Button 
          variant="ghost" 
          className="flex-col gap-1"
          onClick={() => navigate("/room")}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Room</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex-col gap-1"
          onClick={() => navigate("/")}
        >
          <Music2 className="w-6 h-6" />
          <span className="text-xs">Moment</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex-col gap-1"
          onClick={() => console.log('Sing clicked')}
        >
          <Mic2 className="w-6 h-6 text-green-500" />
          <span className="text-xs text-green-500">Sing</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex-col gap-1"
          onClick={() => console.log('Chat clicked')}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs">Chat</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex-col gap-1"
          onClick={() => console.log('Profile clicked')}
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Me</span>
        </Button>
      </div>
    </div>
  );
};