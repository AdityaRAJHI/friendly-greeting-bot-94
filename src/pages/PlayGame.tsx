import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const PlayGame = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold">Play Game</h1>
      </div>

      <div className="p-4">
        <Card className="p-4 bg-pink-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-lg">Game Room</h2>
              <div className="flex items-center gap-1 text-gray-600 mt-1">
                <Users className="h-4 w-4" />
                <span>50.5k users</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Navigation />
    </div>
  );
};

export default PlayGame;