import {
  Button,
  Tooltip,
  TooltipAction,
  TooltipContent,
  TooltipProvider,
} from "keep-react";

export const TooltipComponent = () => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipAction asChild>
          <Button>Tooltip</Button>
        </TooltipAction>
        <TooltipContent>
          <p className="text-body-5 font-medium text-white">
            Tooltip - Title here
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
