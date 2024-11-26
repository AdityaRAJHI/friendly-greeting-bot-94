import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { Music2, Star, Clock, Heart } from "lucide-react";

const ListPage = () => {
  const { toast } = useToast();

  const lists = [
    {
      id: 1,
      title: "Recently Played",
      count: 15,
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      id: 2,
      title: "Favorites",
      count: 23,
      icon: <Heart className="w-6 h-6 text-red-500" />
    },
    {
      id: 3,
      title: "Top Rated",
      count: 10,
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      id: 4,
      title: "My Recordings",
      count: 8,
      icon: <Music2 className="w-6 h-6 text-green-500" />
    }
  ];

  const handleListClick = (list: any) => {
    toast({
      title: list.title,
      description: `Opening ${list.title.toLowerCase()}...`,
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold">My Lists</h1>
      </div>

      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4 space-y-3">
          {lists.map((list) => (
            <Card 
              key={list.id} 
              className="p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50"
              onClick={() => handleListClick(list)}
            >
              {list.icon}
              <div>
                <h3 className="font-semibold">{list.title}</h3>
                <p className="text-sm text-gray-500">{list.count} songs</p>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>

      <Navigation />
    </div>
  );
};

export default ListPage;