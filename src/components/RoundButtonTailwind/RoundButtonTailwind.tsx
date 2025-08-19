import tw from "@/utils/tw";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("inline-flex items-center rounded-md px-8 py-2 box-border cursor-pointer", {
  variants: {
    intent: {
      primary: "bg-gray-800 text-white font-semibold transition hover:bg-gray-900 hover:border-gray-800 border hover:border-gray-400",
      empty: "bg-inherit text-gray-800 hover:bg-orange-800",
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    },
    block: {
      true: "w-full justify-center",
      false: "",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
    block: false,
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

function LinkButton({
  children,
  intent = "primary",
  size,
  className,
  block,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
  
      className={tw(buttonVariants({ intent, size, block }), className)}
      {...rest}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default LinkButton;
