import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Music } from "lucide-react";
import { SongCard } from "@/components/SongCard";
import { CategoryButton } from "@/components/CategoryButton";
import { Navigation } from "@/components/Navigation";
import { ProfileHeader } from "@/components/ProfileHeader";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const songsByCategory = {
  "For You": [
    {
      id: 1,
      title: "Perfect",
      artist: "Ed Sheeran",
      image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png",
      isNewChoice: true,
    },
    {
      id: 2,
      title: "Shape of You",
      artist: "Ed Sheeran",
      image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png",
      recordings: "1.2M recordings"
    },
    {
      id: 3,
      title: "Someone Like You",
      artist: "Adele",
      image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png",
      recordings: "800K recordings"
    }
  ],
  "Hot": [
    {
      id: 4,
      title: "Cruel Summer",
      artist: "Taylor Swift",
      image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png",
      isNewChoice: true,
      recordings: "2.1M recordings"
    },
    {
      id: 5,
      title: "Vampire",
      artist: "Olivia Rodrigo",
      image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png",
      recordings: "1.5M recordings"
    }
  ],
  "Official": [
    {
      id: 6,
      title: "As It Was",
      artist: "Harry Styles",
      image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png",
      recordings: "3.2M recordings"
    },
    {
      id: 7,
      title: "Anti-Hero",
      artist: "Taylor Swift",
      image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png",
      recordings: "2.8M recordings"
    }
  ],
  "Original Songs": [
    {
      id: 8,
      title: "Flowers",
      artist: "Miley Cyrus",
      image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png",
      isNewChoice: true,
      recordings: "4.1M recordings"
    },
    {
      id: 9,
      title: "Last Night",
      artist: "Morgan Wallen",
      image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png",
      recordings: "1.9M recordings"
    }
  ]
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("For You");
  const { toast } = useToast();
  const navigate = useNavigate();

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
            {Object.keys(songsByCategory).map((tab) => (
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
          {songsByCategory[activeTab as keyof typeof songsByCategory].map((song) => (
            <SongCard key={song.id} {...song} />
          ))}
        </div>
      </ScrollArea>

      <Navigation />
    </div>
  );
};

export default Index;