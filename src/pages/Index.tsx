import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Store, ListTodo, Music, User } from "lucide-react";
import { SongCard } from "@/components/SongCard";
import { CategoryButton } from "@/components/CategoryButton";
import { Navigation } from "@/components/Navigation";

const Index = () => {
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

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png"
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
          <Store className="w-6 h-6 text-yellow-500" />
          <ListTodo className="w-6 h-6 text-green-500" />
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
          <CategoryButton color="rose-500" icon={<Music />}>My Songs</CategoryButton>
          <CategoryButton color="green-500">Vocal Range Test</CategoryButton>
          <CategoryButton color="yellow-500">Musical Blessing</CategoryButton>
          <CategoryButton color="pink-500" icon={<User />}>Artists</CategoryButton>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mb-4">
        <div className="flex gap-4 text-sm text-gray-600">
          <Button variant="ghost" className="font-semibold">For You</Button>
          <Button variant="ghost">Hot</Button>
          <Button variant="ghost">Official</Button>
          <Button variant="ghost">Original Songs</Button>
          <Button variant="ghost">Best Movie</Button>
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