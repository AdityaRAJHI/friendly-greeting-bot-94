import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ContributionSection = () => {
  const navigate = useNavigate();

  const handleContributionClick = () => {
    navigate("/contribution");
  };

  return (
    <div 
      className="p-4 bg-white mt-2 cursor-pointer"
      onClick={handleContributionClick}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Contribution</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-pink-500">3</span>
          <ChevronRight className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};