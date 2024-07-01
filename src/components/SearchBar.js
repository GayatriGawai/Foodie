import React, { Fragment } from "react";

export default function SearchBar() {
  return (
    <Fragment>
      <form className="max-w-md mx-auto md:w-8/12">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-primary sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-5 ps-10 text-xs rounded-lg shadow-black/2xl mt-5"
            placeholder="Search for good food..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-primary over:shadow-black/25 hover:shadow-md transition-all font-medium rounded-lg text-sm px-2 py-2 "
          >
            Search
          </button>
        </div>
      </form>
    </Fragment>
  );
}
