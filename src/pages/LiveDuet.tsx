import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const LiveDuet = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold">Live Duet</h1>
      </div>

      <div className="p-4">
        <Card className="p-4 bg-green-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-lg">Live Duet Room</h2>
              <div className="flex items-center gap-1 text-gray-600 mt-1">
                <Users className="h-4 w-4" />
                <span>43.1k users</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Navigation />
    </div>
  );
};

export default LiveDuet;