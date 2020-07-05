import React from "react";
import qs from "qs";
import { useRouter } from "next/router";
import { Pagination as BPagination, PaginationItem } from "reactstrap";
import Link from "next/link";

interface PaginationProps {
  totalCount: number;
  itemsPerPage: number;
  isDisabled?: boolean;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  isDisabled,
  itemsPerPage,
  className,
}) => {
  const router = useRouter();
  if (!totalCount) {
    return null;
  }

  const totalPages = Math.ceil(totalCount / itemsPerPage);
  if (!totalPages) {
    return null;
  }

  const currentPage = router.query.page ? Number(router.query.page) : 1;

  const getPageAs = (page: number) => {
    const [path, queryString] = router.asPath.split("?");
    const query = qs.parse(queryString);

    if (page < 2) {
      delete query.page;
    } else {
      query.page = String(page);
    }
    return {
      pathname: path,
      query: query as { [id: string]: string },
    };
  };

  const getPageHref = (page: number) => {
    const [path, queryString] = router.asPath.split("?");
    const query = qs.parse(queryString);
    if (page < 2) {
      delete query.page;
    } else {
      query.page = String(page);
    }
    return {
      pathname: router.route,
      query: query as { [key: string]: string },
    };
  };

  let pages = [];

  if (totalPages < 6) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem
          key={i}
          disabled={isDisabled}
          active={currentPage === i}
        >
          <Link href={getPageHref(i)} as={getPageAs(i)}>
            <a className="page-link">{i}</a>
          </Link>
        </PaginationItem>
      );
    }
  }

  if (currentPage <= 3 && totalPages >= 6) {
    for (let i = 1; i < 6; i++) {
      pages.push(
        <PaginationItem
          key={i}
          disabled={isDisabled}
          active={currentPage === i}
        >
          <Link href={getPageHref(i)} as={getPageAs(i)}>
            <a className="page-link">{i}</a>
          </Link>
        </PaginationItem>
      );
    }
    pages.push(
      <PaginationItem key={totalPages + 1} disabled>
        <a className="page-link">...</a>
      </PaginationItem>
    );
  }

  if (currentPage > 3 && currentPage <= totalPages - 3 && totalPages >= 6) {
    pages.push(
      <PaginationItem key={totalPages + 1} disabled>
        <a className="page-link">...</a>
      </PaginationItem>
    );

    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      pages.push(
        <PaginationItem
          key={i}
          disabled={isDisabled}
          active={currentPage === i}
        >
          <Link href={getPageHref(i)} as={getPageAs(i)}>
            <a className="page-link">{i}</a>
          </Link>
        </PaginationItem>
      );
    }

    pages.push(
      <PaginationItem key={totalPages + 2} disabled>
        <a className="page-link">...</a>
      </PaginationItem>
    );
  }

  if (currentPage > totalPages - 3 && totalPages >= 6) {
    pages.push(
      <PaginationItem key={totalPages + 1} disabled>
        <a className="page-link">...</a>
      </PaginationItem>
    );

    for (let i = totalPages - 6 + 2; i <= totalPages; i++) {
      pages.push(
        <PaginationItem
          key={i}
          disabled={isDisabled}
          active={currentPage === i}
        >
          <Link href={getPageHref(i)} as={getPageAs(i)}>
            <a className="page-link">{i}</a>
          </Link>
        </PaginationItem>
      );
    }
  }

  return (
    <BPagination className={className}>
      <PaginationItem disabled={currentPage === 1 || isDisabled}>
        <Link href={getPageHref(1)} as={getPageAs(1)}>
          <a className="page-link" aria-label="Previous">
            <span aria-hidden="true" key="caret">
              {"\u00ab"}
            </span>
            <span className="sr-only" key="sr">
              Previous
            </span>
          </a>
        </Link>
      </PaginationItem>

      <PaginationItem disabled={currentPage === 1 || isDisabled}>
        <Link
          href={getPageHref(currentPage - 1)}
          as={getPageAs(currentPage - 1)}
        >
          <a className="page-link">&lsaquo;</a>
        </Link>
      </PaginationItem>

      {pages}

      <PaginationItem disabled={currentPage === totalPages || isDisabled}>
        <Link
          href={getPageHref(currentPage + 1)}
          as={getPageAs(currentPage + 1)}
        >
          <a className="page-link">&rsaquo;</a>
        </Link>
      </PaginationItem>

      <PaginationItem disabled={currentPage === totalPages || isDisabled}>
        <Link href={getPageHref(totalPages)} as={getPageAs(totalPages)}>
          <a className="page-link" aria-label="Next">
            <span aria-hidden="true" key="caret">
              {"\u00bb"}
            </span>
            <span className="sr-only" key="sr">
              Next
            </span>
          </a>
        </Link>
      </PaginationItem>
    </BPagination>
  );
};
