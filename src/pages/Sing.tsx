import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Mic2, Users, Music2 } from "lucide-react";

const SingPage = () => {
  const { toast } = useToast();

  const modes = [
    {
      id: 1,
      title: "Solo",
      description: "Sing by yourself",
      icon: <Mic2 className="w-8 h-8 text-purple-500" />
    },
    {
      id: 2,
      title: "Duet",
      description: "Sing with a partner",
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      id: 3,
      title: "Party",
      description: "Group karaoke session",
      icon: <Music2 className="w-8 h-8 text-green-500" />
    }
  ];

  const handleModeSelect = (mode: any) => {
    toast({
      title: `${mode.title} Mode Selected`,
      description: `Starting ${mode.title.toLowerCase()} singing session...`,
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold">Start Singing</h1>
      </div>

      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4 space-y-4">
          {modes.map((mode) => (
            <Card key={mode.id} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                {mode.icon}
                <div>
                  <h3 className="font-semibold text-lg">{mode.title}</h3>
                  <p className="text-gray-500">{mode.description}</p>
                </div>
              </div>
              <Button 
                onClick={() => handleModeSelect(mode)}
                className="w-full"
              >
                Start {mode.title} Mode
              </Button>
            </Card>
          ))}
        </div>
      </ScrollArea>

      <Navigation />
    </div>
  );
};

export default SingPage;