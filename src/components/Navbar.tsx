import { Avatar, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    toast({
      description: "Redirecting to the login page",
      title: "Logged out successfully",
      variant: "default",
    })
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <nav className="flex w-full items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      <div className="text-lg font-semibold">Welcome to My titles</div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="p-0 bg-transparent">
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="User Avatar"
                />
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-white text-black shadow-lg"
          >
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
