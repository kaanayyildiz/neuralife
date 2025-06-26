import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials } from "@dicebear/collection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";   
import { cn } from "@/lib/utils";


interface GeneratedAvatarProps {
    seed: string;
    className?: string;
    size?: number;
    variant?: "botttsNeutral" | "initials";
}

export const GeneratedAvatar = ({
    seed,
    variant = "botttsNeutral",
    className,
}: GeneratedAvatarProps) => {

    let avatar;

    if (variant === "botttsNeutral") {
        avatar = createAvatar(botttsNeutral, {
            seed,
        });
    } else if (variant === "initials") {
        avatar = createAvatar(initials, {
            seed,
            fontWeight: 400,
            fontSize: 42,
        });
    }

    return (
        <Avatar className={cn(className)}>
            <AvatarImage src={avatar?.toDataUri()} />
            <AvatarFallback>
                {seed.charAt(0)}
            </AvatarFallback>
        </Avatar>
    )
}

export default GeneratedAvatar;