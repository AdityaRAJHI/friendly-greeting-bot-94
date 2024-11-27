import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Gift, Mic, Music2, Plus, User, UserRound, ChevronRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ProfileHeader } from "@/components/ProfileHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const Profile = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Stats Section */}
      <div className="p-4 border-b">
        <div className="flex justify-around text-center">
          <div>
            <div className="font-semibold">58</div>
            <div className="text-xs text-gray-500">Followers</div>
          </div>
          <div>
            <div className="font-semibold">5</div>
            <div className="text-xs text-gray-500">Following</div>
          </div>
          <div>
            <div className="font-semibold">71</div>
            <div className="text-xs text-gray-500">Rank</div>
          </div>
          <div>
            <div className="font-semibold">1.1k</div>
            <div className="text-xs text-gray-500">Gifts</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 p-4 gap-4 border-b">
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <Mic className="w-5 h-5 text-red-500" />
          </div>
          <span className="text-xs">My Songs</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <Music2 className="w-5 h-5 text-purple-500" />
          </div>
          <span className="text-xs">Daily Task</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <Crown className="w-5 h-5 text-green-500" />
          </div>
          <span className="text-xs">Recharge</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Gift className="w-5 h-5 text-blue-500" />
          </div>
          <span className="text-xs">VIP</span>
        </Button>
      </div>

      <ScrollArea className="flex-1 pb-20">
        <div className="space-y-2">
          {/* Personal Info Section */}
          <div className="p-4 bg-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Personal Info</h2>
              <ChevronRight className="text-gray-400" />
            </div>
            
            {/* Basic Info */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Basic Info</span>
                <span>Male</span>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">ID</span>
                <span>1338638t438</span>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Hometown</span>
                <span>Bihar</span>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Bio</span>
                <span className="flex items-center gap-1">
                  Live every moment as 👑 💜💜💜
                </span>
              </div>
            </div>
          </div>

          {/* Top Fans Section */}
          <div className="p-4 bg-white">
            <div className="flex justify-between items-center mb-4">
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

          {/* Album Section */}
          <div className="p-4 bg-white">
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
        </div>
      </ScrollArea>

      {/* Add Button */}
      <Button
        className="fixed bottom-20 right-4 rounded-full w-12 h-12 bg-pink-500 hover:bg-pink-600"
        size="icon"
      >
        <Plus className="w-6 h-6 text-white" />
      </Button>

      <Navigation />
    </div>
  );
};

export default Profile;