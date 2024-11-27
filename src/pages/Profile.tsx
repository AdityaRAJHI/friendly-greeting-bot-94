import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Gift, Mic, Music2, Plus, User, UserRound } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const Profile = () => {
  return (
    <div className="pb-20">
      {/* Profile Stats */}
      <div className="bg-gradient-to-b from-pink-100 to-white p-4">
        <div className="flex justify-around text-center">
          <div>
            <div className="text-xl font-bold">58</div>
            <div className="text-sm text-gray-600">Followers</div>
          </div>
          <div>
            <div className="text-xl font-bold">8</div>
            <div className="text-sm text-gray-600">Following</div>
          </div>
          <div>
            <div className="text-xl font-bold">71</div>
            <div className="text-sm text-gray-600">Rank</div>
          </div>
          <div>
            <div className="text-xl font-bold">1.1k</div>
            <div className="text-sm text-gray-600">Gifts</div>
          </div>
        </div>

        {/* Profile Actions */}
        <div className="mt-8 grid grid-cols-4 gap-4">
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
              <Mic className="w-6 h-6 text-pink-500" />
            </div>
            <span className="text-xs">Drafts</span>
          </Button>
          
          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
              <Music2 className="w-6 h-6 text-pink-500" />
            </div>
            <span className="text-xs">My Songs</span>
          </Button>

          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
              <UserRound className="w-6 h-6 text-pink-500" />
            </div>
            <span className="text-xs">Party Tech</span>
          </Button>

          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
              <Crown className="w-6 h-6 text-pink-500" />
            </div>
            <span className="text-xs">VIP</span>
          </Button>

          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
              <Gift className="w-6 h-6 text-pink-500" />
            </div>
            <span className="text-xs">Game</span>
          </Button>

          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
              <Crown className="w-6 h-6 text-pink-500" />
            </div>
            <span className="text-xs">Ranks</span>
          </Button>

          <Button variant="ghost" className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
              <Gift className="w-6 h-6 text-pink-500" />
            </div>
            <span className="text-xs">Recharge</span>
          </Button>

          <Button variant="ghost" className="flex flex-col items-center gap-1 relative">
            <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs">More</span>
          </Button>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Profile;