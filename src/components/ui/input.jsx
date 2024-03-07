import * as React from "react"

import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 w-12   px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus:outline-none focus-visible:none focus-visible:ring-gray-950 focus-visible:ring-offset-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-black  dark:bg-white bg-white dark:ring-offset-gray-950 dark:placeholder:text-black dark:focus-visible:ring-gray-300",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
