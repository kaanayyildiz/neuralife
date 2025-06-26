import { authClient } from "@/lib/auth-client";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import GeneratedAvatar from "@/components/generated-avatar";

const DashboardUserButton = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending || !data?.user) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden">
        {data.user.image ? (
          <Avatar>
            <AvatarImage src={data.user.image} />
          </Avatar>
        ) : (
          <GeneratedAvatar seed={data.user.name} variant="initials" className="size-9 mr-3" />
        )}
        <div className="flex flex-col text-left overflow-hidden flex-1 min-w-0">
          <p className="text-sm font-medium text-white">{data.user.name}</p>
          <p className="text-xs text-muted-foreground">{data.user.email}</p>
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default DashboardUserButton;
