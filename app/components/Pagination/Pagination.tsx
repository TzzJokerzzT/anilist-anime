"use client";

import { useAnimeStore } from "@/context/AnilistProvider";
import {
  Pagination,
  PaginationGoTo,
  PaginationItem,
  PaginationList,
  PaginationNavigator,
} from "keep-react";
import { CaretLeft, CaretRight, DotsThree } from "phosphor-react";

export const PaginationComponent = () => {
  const { currentPage, totalPages, setPage, fetchPopularAnimes } =
    useAnimeStore();

  const handlePageChange = async (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setPage(page);
      await fetchPopularAnimes(page);
    }
  };

  const renderPaginationItems = () => {
    const items = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 11) {
        items.push(
          <PaginationItem key="dots">
            <DotsThree size={20} />
          </PaginationItem>,
        );
      }

      if (i > 10) continue;

      items.push(
        <PaginationItem
          className="m-0 w-5  bg-[#4fc4cf] sm:w-8"
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </PaginationItem>,
      );
    }

    return items;
  };

  return (
    <Pagination
      shape="circle"
      className="flex flex-col mb-3 sm:flex-row justify-center items-center sm:space-x-2 space-y-2 sm:space-y-0 md:space-x-4"
    >
      <PaginationNavigator
        shape="circle"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="hidden sm:flex bg-[#4fc4cf]"
      >
        <CaretLeft size={18} />
      </PaginationNavigator>
      <PaginationList>
        {renderPaginationItems()}
        <PaginationItem className=" bg-[#4fc4cf] ">{totalPages}</PaginationItem>
      </PaginationList>

      <PaginationNavigator
        shape="circle"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === 1160}
        className="hidden  bg-[#4fc4cf] sm:flex"
      >
        <CaretRight size={18} />
      </PaginationNavigator>
      <PaginationGoTo>
        <span>/ Go to</span>
        <form>
          <input
            type="number"
            className="h-9w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] rounded-md border border-metal-100 text-center text-metal-600 focus:outline-none dark:border-metal-800 dark:text-metal-300"
            value={currentPage}
            onChange={(e) => handlePageChange(Number(e.target.value))}
          />
        </form>
        <span>of {totalPages}</span>
      </PaginationGoTo>
    </Pagination>
  );
};
