import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/outline";

const ShoppingCartWithNumber = ({ number }) => {
  return (
    <div className="relative inline-block">
      <ShoppingBagIcon className="h-6 w-6" />
      <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2">
        {number}
      </span>
    </div>
  );
};

export default ShoppingCartWithNumber;
