import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import React from "react";

function PaginationButton() {
  const router = useRouter();
  const startIdx = Number(router.query.start) || 0;
  return (
    <div className="flex mx-auto justify-between max-w-lg text-blue-600  mb-10">
      {startIdx >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${startIdx - 10}`}>
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-10 animate-bounce" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIdx + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-10 animate-bounce" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButton;
