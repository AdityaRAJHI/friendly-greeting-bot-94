import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Gift, Mic, Music2, Plus, User, UserRound, ChevronRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ProfileHeader } from "@/components/ProfileHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [personalInfo, setPersonalInfo] = useState({
    basicInfo: "Male",
    id: "1338638t438",
    hometown: "Bihar",
    bio: "Live every moment as 👑 💜💜💜"
  });

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/opening");
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handlePersonalInfoUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedInfo = {
      basicInfo: formData.get('basicInfo') as string || personalInfo.basicInfo,
      hometown: formData.get('hometown') as string || personalInfo.hometown,
      bio: formData.get('bio') as string || personalInfo.bio,
      id: personalInfo.id // ID remains unchanged
    };
    
    setPersonalInfo(updatedInfo);
    toast({
      title: "Success",
      description: "Personal information updated successfully",
    });
  };

  const handleAddContent = () => {
    toast({
      title: "Create New Content",
      description: "Choose what type of content you'd like to create",
    });
    // You can implement additional logic here for different content types
  };

  return (
    <div className="pb-20">
      <div className="flex flex-col">
        {/* Personal Info Section */}
        <Dialog>
          <DialogTrigger asChild>
            <div className="p-4 bg-white cursor-pointer">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Personal Info</h2>
                <ChevronRight className="text-gray-400" />
              </div>
              
              {/* Basic Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Basic Info</span>
                  <span>{personalInfo.basicInfo}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">ID</span>
                  <span>{personalInfo.id}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Hometown</span>
                  <span>{personalInfo.hometown}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Bio</span>
                  <span className="flex items-center gap-1">
                    {personalInfo.bio}
                  </span>
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Personal Information</DialogTitle>
            </DialogHeader>
            <form onSubmit={handlePersonalInfoUpdate} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Basic Info</label>
                <Input name="basicInfo" defaultValue={personalInfo.basicInfo} />
              </div>
              <div>
                <label className="text-sm font-medium">Hometown</label>
                <Input name="hometown" defaultValue={personalInfo.hometown} />
              </div>
              <div>
                <label className="text-sm font-medium">Bio</label>
                <Input name="bio" defaultValue={personalInfo.bio} />
              </div>
              <Button type="submit">Save Changes</Button>
            </form>
          </DialogContent>
        </Dialog>

        {/* Top Fans Section */}
        <div className="p-4 bg-white mt-2">
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

        {/* Contribution Section */}
        <div className="p-4 bg-white mt-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Contribution</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-pink-500">3</span>
              <ChevronRight className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Album Section */}
        <div className="p-4 bg-white mt-2">
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

        {/* Cover Section */}
        <div className="p-4 bg-white mt-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Cover</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">98</span>
              <ChevronRight className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="p-4">
          <Button 
            variant="destructive" 
            className="w-full"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Add Button */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-20 right-4 rounded-full w-12 h-12 bg-pink-500 hover:bg-pink-600"
            size="icon"
            onClick={handleAddContent}
          >
            <Plus className="w-6 h-6 text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Content</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={() => navigate('/live-duet')} variant="outline">
              <Mic className="mr-2 h-4 w-4" /> Live Duet
            </Button>
            <Button onClick={() => navigate('/sing')} variant="outline">
              <Music2 className="mr-2 h-4 w-4" /> Sing
            </Button>
            <Button onClick={() => navigate('/chat')} variant="outline">
              <User className="mr-2 h-4 w-4" /> Chat
            </Button>
            <Button onClick={() => navigate('/play-game')} variant="outline">
              <Crown className="mr-2 h-4 w-4" /> Play Game
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Navigation />
    </div>
  );
};

export default Profile;