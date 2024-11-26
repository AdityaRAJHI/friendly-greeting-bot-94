import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Users, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const RoomPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const rooms = [
    { id: 1, type: "Live Duet", count: "43.1 k", color: "bg-green-100" },
    { id: 2, type: "Sing", count: "54.1 k", color: "bg-red-100" },
    { id: 3, type: "Chat", count: "35.1 k", color: "bg-yellow-100" },
    { id: 4, type: "Play Ludo", count: "10.4 k", color: "bg-yellow-100" },
    { id: 5, type: "Play Billiards", count: "25.4 k", color: "bg-green-100" },
    { id: 6, type: "Play Game", count: "50.5 k", color: "bg-red-100" },
  ];

  const recommendedRooms = [
    {
      id: 1,
      type: "Chat",
      title: "Kabhi Sham dhale",
      subtitle: "Leat's together",
      tag: "Make Friend",
      users: 43,
      color: "bg-green-100",
    },
    {
      id: 2,
      type: "Sing Together",
      title: "Official Singing Room",
      subtitle: "Leat's together",
      tag: "Beginer Room",
      users: 7,
      color: "bg-yellow-100",
    },
    {
      id: 3,
      type: "Chat",
      title: "Boys and girls are welcome in the family",
      users: 8,
      color: "bg-red-100",
    },
    {
      id: 4,
      type: "Sing Together",
      title: "Official Singing Room",
      subtitle: "Chura Liya Hai Tumne",
      users: 7,
      color: "bg-green-100",
    },
  ];

  const handleRoomClick = (room: any) => {
    toast({
      title: "Joining Room",
      description: `Joining ${room.type} room...`,
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
      <div className="p-4 flex justify-between items-center border-b">
        <h1 className="font-semibold">Party</h1>
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/notification")}
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/")}
          >
            <Home className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {rooms.map((room) => (
            <Card 
              key={room.id} 
              className={`${room.color} p-4 flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity`}
              onClick={() => handleRoomClick(room)}
            >
              <span className="font-medium">{room.type}</span>
              <div className="flex items-center gap-1 mt-1">
                <Users className="h-4 w-4" />
                <span className="text-sm">{room.count}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold">Recommend</h2>
            <div className="flex gap-2 text-sm text-gray-500">
              <Button 
                variant="ghost" 
                size="sm" 
                className="font-medium"
                onClick={() => toast({ title: "Karaoke selected" })}
              >
                Karaoke
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => toast({ title: "Chat selected" })}
              >
                Chat
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => toast({ title: "Game selected" })}
              >
                Game
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {recommendedRooms.map((room) => (
              <Card 
                key={room.id} 
                className={`${room.color} p-4 cursor-pointer hover:opacity-80 transition-opacity`}
                onClick={() => handleRoomClick(room)}
              >
                <div className="flex flex-col h-full">
                  <span className="text-sm bg-white/50 rounded-full px-2 py-0.5 w-fit">
                    {room.type}
                  </span>
                  <h3 className="font-medium mt-2">{room.title}</h3>
                  {room.subtitle && (
                    <p className="text-sm text-gray-600">♪ {room.subtitle}</p>
                  )}
                  {room.tag && (
                    <span className="text-xs bg-white/50 rounded-full px-2 py-0.5 w-fit mt-1">
                      # {room.tag}
                    </span>
                  )}
                  <div className="flex items-center gap-1 mt-auto pt-2">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{room.users}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default RoomPage;