import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { uploadProfileImage } from "@/lib/supabase";

export const ProfileHeader = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("Navi_star0329");
  const [avatarUrl, setAvatarUrl] = useState("/lovable-uploads/b1ca1849-ac3d-40e8-8453-aa9e9fe7757e.png");
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        setIsUploading(true);
        const publicUrl = await uploadProfileImage(file);
        setAvatarUrl(publicUrl);
        toast({
          title: "Success",
          description: "Profile picture updated successfully",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to update profile picture",
          variant: "destructive",
        });
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleNameSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsEditing(false);
    toast({
      title: "Username updated",
      description: "Your username has been successfully updated.",
    });
  };

  return (
    <div className="flex items-center gap-4 p-4">
      <div className="relative">
        <Avatar className="w-12 h-12 cursor-pointer">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>NS</AvatarFallback>
        </Avatar>
        <label className="absolute bottom-0 right-0 cursor-pointer">
          <Edit2 className="w-4 h-4 text-gray-600" />
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
            disabled={isUploading}
          />
        </label>
      </div>

      <div className="flex-1">
        {isEditing ? (
          <form onSubmit={handleNameSubmit} className="flex gap-2">
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="max-w-[200px]"
            />
            <Button type="submit" size="sm">
              Save
            </Button>
          </form>
        ) : (
          <div className="flex items-center gap-2">
            <h2 className="font-semibold">{username}</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(true)}
              className="p-1 h-auto"
            >
              <Edit2 className="w-4 h-4" />
            </Button>
          </div>
        )}
        <div className="flex gap-1 text-xs">
          <span className="bg-red-100 text-red-600 px-1 rounded">❤️ 5</span>
          <span className="bg-green-100 text-green-600 px-1 rounded">
            100 ⭐
          </span>
        </div>
      </div>
    </div>
  );
};