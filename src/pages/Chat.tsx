import { Navigation } from "@/components/Navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AtSign, MessageSquare, Users, Eye, Gift, Megaphone } from "lucide-react";

const Chat = () => {
  return (
    <div className="pb-20">
      {/* Stories/Live Section */}
      <div className="overflow-x-auto flex gap-2 p-4 border-b">
        {["PARTY", "LIVE", "PARTY", "HD LIVE"].map((type, index) => (
          <div key={index} className="flex-shrink-0 text-center">
            <Avatar className="w-16 h-16 border-2 border-pink-500">
              <AvatarImage src={`/lovable-uploads/b1ca1849-ac3d-40e8-8453-aa9e9fe7757e.png`} />
              <AvatarFallback>{type[0]}</AvatarFallback>
            </Avatar>
            <span className="text-xs mt-1 block">{type}</span>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-5 gap-4 p-4 border-b">
        <Button variant="ghost" className="flex flex-col items-center p-2">
          <div className="relative">
            <AtSign className="w-6 h-6 text-blue-500" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
          </div>
          <span className="text-xs mt-1">Mentions</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center p-2">
          <MessageSquare className="w-6 h-6 text-gray-500" />
          <span className="text-xs mt-1">Comments</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center p-2">
          <div className="relative">
            <Users className="w-6 h-6 text-blue-500" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">4</span>
          </div>
          <span className="text-xs mt-1">New Friends</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center p-2">
          <Eye className="w-6 h-6 text-purple-500" />
          <span className="text-xs mt-1">Visitors Page</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center p-2">
          <div className="relative">
            <Gift className="w-6 h-6 text-pink-500" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </div>
          <span className="text-xs mt-1">Gifts</span>
        </Button>
      </div>

      {/* Chat List */}
      <div className="space-y-4 p-4">
        {/* System Message */}
        <Card className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
            <Megaphone className="w-6 h-6 text-orange-500" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold">System</span>
              <span className="text-xs px-2 py-0.5 bg-red-100 text-red-500 rounded">Official</span>
            </div>
            <p className="text-sm text-gray-600">Upgrade VIP to get rebates! Best time to upgrade!</p>
          </div>
        </Card>

        {/* Activity Center */}
        <Card className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
            <Gift className="w-6 h-6 text-orange-500" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Activity Center</span>
              <span className="text-xs px-2 py-0.5 bg-pink-100 text-pink-500 rounded">Official</span>
            </div>
            <p className="text-sm text-gray-600">Live Annual Awards</p>
          </div>
        </Card>

        {/* Chat Rooms */}
        {["Feel the Music [Chat]", "Feel the Music [Family]"].map((room, index) => (
          <Card key={index} className="p-4 flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/lovable-uploads/b1ca1849-ac3d-40e8-8453-aa9e9fe7757e.png" />
              <AvatarFallback>FM</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{room}</span>
                <span className="text-xs text-gray-500">08:15 AM</span>
              </div>
              <p className="text-sm text-gray-600">[Link]</p>
            </div>
          </Card>
        ))}
      </div>

      <Navigation />
    </div>
  );
};

export default Chat;