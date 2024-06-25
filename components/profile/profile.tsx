import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EllipsisVertical } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

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
      className={cn("p-0 h-fit rounded-lg w-full", {
        "border-none": !expanded,
      })}
    >
      <motion.div
        animate={{ padding: expanded ? "6px" : "0" }}
        className="group flex w-full items-center justify-between gap-2 p-1.5"
      >
        <div className="flex w-full items-center gap-2">
          <Avatar>
            <AvatarImage src={image.src} alt={name} />
            <AvatarFallback className="group-hover:bg-foreground/5">
              {image.fallback}
            </AvatarFallback>
          </Avatar>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-start"
              >
                <div className="text-sm font-medium">{name}</div>
                <div className="text-xs text-muted-foreground">{email}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <EllipsisVertical
          className={cn("h-4 w-4 mr-1", { hidden: !expanded })}
        />
      </motion.div>
    </Button>
  );
};

export default profile;
