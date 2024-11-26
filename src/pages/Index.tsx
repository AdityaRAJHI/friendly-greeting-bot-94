import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Store, ListTodo, Music, User } from "lucide-react";
import { SongCard } from "@/components/SongCard";
import { CategoryButton } from "@/components/CategoryButton";
import { Navigation } from "@/components/Navigation";
import { ProfileHeader } from "@/components/ProfileHeader";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [activeTab, setActiveTab] = useState("For You");
  const { toast } = useToast();
  const navigate = useNavigate();

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
    navigate("/store");
  };

  const handleListClick = () => {
    navigate("/list");
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white max-w-md mx-auto">
        <ProfileHeader />
        
        <div className="px-4 mb-4">
          <Input 
            placeholder="Search by songs, singers or SID" 
            className="bg-gray-50"
          />
        </div>

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
          </div>
        </div>

        <div className="px-4 mb-4">
          <div className="flex gap-4 text-sm text-gray-600 overflow-x-auto">
            {["For You", "Hot", "Official", "Original Songs", "Best Movie"].map((tab) => (
              <Button
                key={tab}
                variant="ghost"
                className={`font-semibold whitespace-nowrap ${
                  activeTab === tab ? "text-black border-b-2 border-black" : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-280px)] mt-[220px] mb-[60px]">
        <div className="px-4">
          {songs.map((song) => (
            <SongCard key={song.id} {...song} />
          ))}
        </div>
      </ScrollArea>

      <Navigation />
    </div>
  );
};

export default Index;
