import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Contribution = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
        <ChevronLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      <h1 className="text-2xl font-bold mb-4">Contribution</h1>
      {/* Add your contribution content here */}
    </div>
  );
};

export default Contribution;