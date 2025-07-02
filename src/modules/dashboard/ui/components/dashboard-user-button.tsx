import { authClient } from "@/lib/auth-client";
import { 
  DropdownMenuTrigger, 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import GeneratedAvatar from "@/components/generated-avatar";
import { 
  User, 
  CreditCard, 
  Bell, 
  LogOut, 
  ChevronDown 
} from "lucide-react";
import { useRouter } from "next/navigation";

const DashboardUserButton = () => {
  const router = useRouter();
  const { data, isPending } = authClient.useSession();

  if (isPending || !data?.user) {
    return null;
  }

  const onLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer rounded-lg border border-accent-foreground/30 hover:border-accent-foreground/80 p-2.5 w-full flex items-center justify-between bg-white overflow-hidden">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {data.user.image ? (
            <Avatar className="rounded-lg">
              <AvatarImage src={data.user.image} />
            </Avatar>
          ) : (
            <GeneratedAvatar seed={data.user.name} variant="initials" className="size-9" />
          )}
          <div className="flex flex-col text-left overflow-hidden flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{data.user.name}</p>
            <p className="text-xs text-muted-foreground truncate">{data.user.email}</p>
          </div>
        </div>
        <ChevronDown className="size-4 text-muted-foreground shrink-0" />
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex items-center gap-3">
            {data.user.image ? (
              <Avatar className="rounded-lg">
                <AvatarImage src={data.user.image} />
              </Avatar>
            ) : (
              <GeneratedAvatar seed={data.user.name} variant="initials" className="size-9" />
            )}
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{data.user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">{data.user.email}</p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <User className="mr-2 size-4" />
          <span>Account</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <CreditCard className="mr-2 size-4" />
          <span>Billing</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Bell className="mr-2 size-4" />
          <span>Notifications</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout} variant="destructive" className="cursor-pointer">
            <LogOut className="mr-2 size-4" />
            <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardUserButton;
