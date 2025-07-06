import { useUserContext } from "@/contexts/userContext";
import useLogout from "@/hooks/auth/useLogout";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { ChevronDown, LogOut, UserCog } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function UserMenuDropdown() {
  const { user } = useUserContext();
  const logout = useLogout();

  return (
    <div className="flex items-center space-x-2">
      {/* User Dropdown */}
      <Popover>
        <PopoverTrigger asChild className="hover:bg-transparent">
          {/* Dropdown Toggle Button */}
          <Button className="hover:shadow-lg p-6 transform transition duration-300 ease-in-out hover:scale-105"
          variant={"outline"}
          >
            <div>
              <Image
                src={user?.avatar_url ?? "/images/defaultAvatar.jpeg"}
                width={32}
                height={32}
                className="rounded-full"
                alt="user Avatar"
              />
            </div>
            <span className="hidden sm:inline">{user?.username}</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-0">
          <Command>
            <CommandList>
              {/* Settings Option */}
              <CommandItem>
                <Button className="flex items-center w-full " variant={"outline"}>
                  <Link
                    href="/dashboard/settings" className="flex space-x-3"
                  >
                    <UserCog className="w-5 h-5 text-gray-500" />
                    <span>Settings</span>
                  </Link>
                </Button>
              </CommandItem>

              {/* Log out Option */}
              <CommandItem>
                <Button
                  onClick={async () => {
                    await logout();
                  }}
                  className="flex items-center w-full " variant={"outline"}
                >
                  <LogOut className="w-5 h-5 text-gray-500" />
                  <span>Log out</span>
                </Button>
              </CommandItem>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
