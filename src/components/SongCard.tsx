import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface SongCardProps {
  title: string;
  artist: string;
  image: string;
  isNewChoice?: boolean;
  recordings?: string | null;
}

export const SongCard = ({ title, artist, image, isNewChoice, recordings }: SongCardProps) => {
  return (
    <Card className="flex items-center gap-3 p-2 mb-3">
      <img src={image} alt={title} className="w-16 h-16 rounded-lg object-cover" />
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{artist}</p>
        <div className="flex items-center gap-2 mt-1">
          {isNewChoice && (
            <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded">
              New Users' choice
            </span>
          )}
          {recordings && (
            <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded">
              {recordings}
            </span>
          )}
        </div>
      </div>
      <Button 
        onClick={() => console.log('Sing button clicked')}
        className="bg-red-500 hover:bg-red-600 text-white"
      >
        Sing
      </Button>
    </Card>
  );
};