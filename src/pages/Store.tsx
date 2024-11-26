import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Coin, Crown, Diamond, Gift } from "lucide-react";

const StorePage = () => {
  const { toast } = useToast();

  const storeItems = [
    {
      id: 1,
      title: "100 Coins",
      price: "$0.99",
      icon: <Coin className="w-8 h-8 text-yellow-500" />,
      description: "Basic coin package"
    },
    {
      id: 2,
      title: "VIP Status",
      price: "$4.99/month",
      icon: <Crown className="w-8 h-8 text-purple-500" />,
      description: "Access exclusive features"
    },
    {
      id: 3,
      title: "1000 Diamonds",
      price: "$9.99",
      icon: <Diamond className="w-8 h-8 text-blue-500" />,
      description: "Premium currency package"
    },
    {
      id: 4,
      title: "Gift Box",
      price: "$2.99",
      icon: <Gift className="w-8 h-8 text-pink-500" />,
      description: "Random rewards package"
    }
  ];

  const handlePurchase = (item: any) => {
    toast({
      title: "Purchase Initiated",
      description: `Processing purchase for ${item.title}...`,
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold">Store</h1>
      </div>

      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4 grid grid-cols-2 gap-4">
          {storeItems.map((item) => (
            <Card key={item.id} className="p-4 flex flex-col items-center">
              {item.icon}
              <h3 className="font-semibold mt-2">{item.title}</h3>
              <p className="text-sm text-gray-500 text-center">{item.description}</p>
              <p className="text-green-600 font-semibold mt-2">{item.price}</p>
              <Button 
                onClick={() => handlePurchase(item)}
                className="mt-2 w-full"
                variant="outline"
              >
                Purchase
              </Button>
            </Card>
          ))}
        </div>
      </ScrollArea>

      <Navigation />
    </div>
  );
};

export default StorePage;