import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ProfileHeader } from "@/components/ProfileHeader";
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
import { TopFansSection } from "@/components/profile/TopFansSection";
import { ContributionSection } from "@/components/profile/ContributionSection";
import { AlbumSection } from "@/components/profile/AlbumSection";
import { Mic, Music2, User, Crown } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

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

  const handleAddContent = () => {
    toast({
      title: "Create New Content",
      description: "Choose what type of content you'd like to create",
    });
  };

  return (
    <div className="pb-20">
      <div className="flex flex-col">
        <ProfileHeader />
        <TopFansSection />
        <ContributionSection />
        <AlbumSection />

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