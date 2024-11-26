import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/Navigation";
import { Bell, Users, AtSign, MessageSquare, Gift } from "lucide-react";

const NotificationPage = () => {
  const stories = [
    { id: 1, name: "PARTY", image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png", isLive: false },
    { id: 2, name: "LIVE", image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png", isLive: true },
    { id: 3, name: "PARTY", image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png", isLive: false },
    { id: 4, name: "LIVE", image: "/lovable-uploads/8073f6c0-1dfa-4cb9-be05-662565b5e703.png", isLive: true },
  ];

  const notifications = [
    { id: 1, title: "System", description: "# Global Cover Competition # Post your social...", icon: <Bell className="text-red-500" />, badge: "5" },
    { id: 2, title: "Activity Center", description: "Honor Wall of Recharge to Share Millions of Coin....", icon: <MessageSquare className="text-green-500" /> },
    { id: 3, title: "Safety Notification", description: "", icon: <Bell className="text-yellow-500" /> },
    { id: 4, title: "New Friends", description: "", icon: <Users className="text-pink-500" /> },
    { id: 5, title: "Mentions", description: "", icon: <AtSign className="text-green-500" /> },
    { id: 6, title: "Comments", description: "", icon: <MessageSquare className="text-yellow-500" /> },
    { id: 7, title: "Gifts", description: "", icon: <Gift className="text-red-500" /> },
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex gap-4">
          <span className="font-semibold">Following</span>
          <span>Chat</span>
          <span className="font-semibold">Notification</span>
        </div>
        <div className="flex items-center gap-2">
          <Input 
            placeholder="Search by user name or ID"
            className="max-w-[200px]"
          />
        </div>
      </div>

      <div className="p-4">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center">
              <Avatar className="w-16 h-16 ring-2 ring-offset-2 ring-green-500">
                <img src={story.image} alt={story.name} className="object-cover" />
              </Avatar>
              <span className="text-xs mt-1">{story.name}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4 mt-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                {notification.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{notification.title}</h3>
                {notification.description && (
                  <p className="text-sm text-gray-500">{notification.description}</p>
                )}
              </div>
              {notification.badge && (
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">
                  {notification.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default NotificationPage;