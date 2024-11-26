import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Music2 } from "lucide-react";

const Opening = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-500 to-indigo-600 p-4">
      <div className="text-center animate-fade-in">
        <div className="mb-6">
          <Music2 className="w-20 h-20 text-white mx-auto animate-bounce" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          SingingStarApp
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-md mx-auto">
          Your personal karaoke companion. Sing, share, and shine!
        </p>

        <Button
          onClick={() => navigate("/")}
          className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          Start Singing
        </Button>
      </div>

      <div className="fixed bottom-4 text-white/60 text-sm">
        © 2024 SingingStarApp. All rights reserved.
      </div>
    </div>
  );
};

export default Opening;