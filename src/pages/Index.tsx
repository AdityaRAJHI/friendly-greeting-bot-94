import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Store, ListTodo, Music, User } from "lucide-react";
import { SongCard } from "@/components/SongCard";
import { CategoryButton } from "@/components/CategoryButton";
import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [activeTab, setActiveTab] = useState("For You");
  const { toast } = useToast();

  const songs = [
    {
      id: 1,
      title: "Kabhi Sham dhale",
      artist: "Mohammad faiz",
      image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png",
      isNewChoice: true,
      recordings: null
    },
    {
      id: 2,
      title: "Dhana",
      artist: "Priuanka meher",
      image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png",
      recordings: "5.3k recordings"
    },
    {
      id: 3,
      title: "Nadaaniyan",
      artist: "Akshath",
      image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png",
      recordings: "221 recordings"
    }
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    toast({
      title: `${tab} Selected`,
      description: `Showing ${tab.toLowerCase()} songs...`,
    });
  };

  const handleCategoryClick = (category: string) => {
    toast({
      title: category,
      description: `Viewing ${category}...`,
    });
  };

  const handleStoreClick = () => {
    toast({
      title: "Store",
      description: "Opening store...",
    });
  };

  const handleListClick = () => {
    toast({
      title: "List",
      description: "Opening list...",
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/lovable-uploads/b1ca1849-ac3d-40e8-8453-aa9e9fe7757e.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">Navi_star0329</h2>
            <div className="flex gap-1 text-xs">
              <span className="bg-red-100 text-red-600 px-1 rounded">❤️ 5</span>
              <span className="bg-green-100 text-green-600 px-1 rounded">100 ⭐</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Store 
            className="w-6 h-6 text-yellow-500 cursor-pointer" 
            onClick={handleStoreClick}
          />
          <ListTodo 
            className="w-6 h-6 text-green-500 cursor-pointer"
            onClick={handleListClick}
          />
        </div>
      </div>

      {/* Search */}
      <div className="px-4 mb-4">
        <Input 
          placeholder="Search by songs, singers or SID" 
          className="bg-gray-50"
        />
      </div>

      {/* Categories */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <CategoryButton 
            color="rose-500" 
            icon={<Music />}
            onClick={() => handleCategoryClick("My Songs")}
          >
            My Songs
          </CategoryButton>
          <CategoryButton 
            color="green-500"
            onClick={() => handleCategoryClick("Vocal Range Test")}
          >
            Vocal Range Test
          </CategoryButton>
          <CategoryButton 
            color="yellow-500"
            onClick={() => handleCategoryClick("Musical Blessing")}
          >
            Musical Blessing
          </CategoryButton>
          <CategoryButton 
            color="pink-500" 
            icon={<User />}
            onClick={() => handleCategoryClick("Artists")}
          >
            Artists
          </CategoryButton>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mb-4">
        <div className="flex gap-4 text-sm text-gray-600">
          {["For You", "Hot", "Official", "Original Songs", "Best Movie"].map((tab) => (
            <Button
              key={tab}
              variant="ghost"
              className={`font-semibold ${
                activeTab === tab ? "text-black border-b-2 border-black" : ""
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      {/* Songs List */}
      <ScrollArea className="h-[calc(100vh-280px)]">
        <div className="px-4">
          {songs.map((song) => (
            <SongCard key={song.id} {...song} />
          ))}
        </div>
      </ScrollArea>

      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
};

export default Index;