import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EllipsisVertical } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type ProfileProps = {
  name: string;
  email: string;
  image: {
    src: string;
    fallback: string;
  };
  expanded?: boolean;
};

const profile = ({ name, email, image, expanded = true }: ProfileProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "group flex w-full items-center justify-between gap-2 rounded-lg h-fit p-1.5",
        {
          "p-0 border-none": !expanded,
        }
      )}
    >
      <div className="flex w-full items-center gap-2">
        <Avatar>
          <AvatarImage src={image.src} alt={name} />
          <AvatarFallback className="group-hover:bg-foreground/5">
            {image.fallback}
          </AvatarFallback>
        </Avatar>
        <div className={cn("flex flex-col items-start", { hidden: !expanded })}>
          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-muted-foreground">{email}</div>
        </div>
      </div>
      <EllipsisVertical className={cn("h-4 w-4 mr-1", { hidden: !expanded })} />
    </Button>
  );
};

export default profile;
