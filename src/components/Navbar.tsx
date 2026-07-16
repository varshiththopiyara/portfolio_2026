import { Heart } from "lucide-react";

function Navbar() {
  return (
    <div>
      <div className="flex ml-4  p-2 text-text justify-between">
        <h3 className="text-2xl font-brolimo">Varshith</h3>
        <div className="flex flex-col mr-4 justify-between font-brolimo ">
          <h3>From Hyderabad, IND</h3>
          <p className="text-sm text-center flex items-center gap-1 text-medium "> <Heart className="w-4 h-4 hover:text-red-500"/>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
