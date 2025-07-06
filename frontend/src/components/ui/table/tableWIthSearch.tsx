import {
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Search,
} from "lucide-react";
import { TableHeaderObject } from "./types";
import { Input } from "../input";
import { useState } from "react";
import { truncateText } from "@/utils/truncate";
import { formatDate } from "@/utils/formatDateTime";
import { Button } from "@/components/ui/button";

interface ITableWithSearchProps {
  tableHeaders: TableHeaderObject;
  heading: string;
  subheading?: string;
  onSearch?: (q: string) => void;
  data: Array<any>;
  onButtonClick?: () => void;
  buttonText?: string;
  currentPage: number;
  setCurrentPage?: (page: number) => void;
  paginate?: boolean;
  allowSearch?: boolean;
}

export default function TablesInCardwithSearchandActions({
  heading,
  subheading,
  onSearch,
  data,
  onButtonClick,
  buttonText,
  tableHeaders,
  currentPage,
  setCurrentPage,
  paginate = true,
  allowSearch = true,
}: ITableWithSearchProps) {
  const [isLoadingKey, setIsLoadingKey] = useState<string | null>(null);
  const pageSize = 10;

  const handlePageChange = (direction: "next" | "prev") => {
    if (!setCurrentPage) return;
    if (direction === "next") setCurrentPage(currentPage + 1);
    else setCurrentPage(currentPage - 1);
  };

  const renderCell = (key: string, item: any, rowIndex: number) => {
    const config = tableHeaders[key];
    const value = item[key]?.data;

    switch (config.type) {
      case "button":
        return (
          <td key={key} className="py-1.5 pr-3">
            <Button
              onClick={async () => {
                setIsLoadingKey(`${rowIndex}-${key}`);
                try {
                  await item[key].handleClick(item[config.inputKey ?? ""].data);
                } finally {
                  setIsLoadingKey(null);
                }
              }}
              variant="outline"
              className="flex items-center gap-1"
            >
              {isLoadingKey === `${rowIndex}-${key}` && (
                <RotateCw className="animate-spin text-teal-400 h-5 w-5" />
              )}
              {item[key]?.data}
            </Button>
          </td>
        );
      case "date":
        return (
          <td key={key} className="py-1 pr-3 font-medium">
            <span title={value} className="inline-block max-w-xs">
              {formatDate(value)}
            </span>
          </td>
        );
      case "array":
        return (
          <td key={key} className="py-1 pr-3 font-medium">
            <span title={value} className="inline-block max-w-xs">
              {value?.join(", ")}
            </span>
          </td>
        );
      default:
        return (
          <td key={key} className="py-1 pr-3 font-medium">
            <span title={value} className="inline-block max-w-xs">
              {truncateText(value, 40)}
            </span>
          </td>
        );
    }
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="flex flex-col gap-3 bg-gray-50 px-5 py-4 text-center dark:bg-gray-700/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <h3 className="mb-1 text-lg font-semibold">{heading}</h3>
          {subheading && (
            <p className="text-sm text-muted-foreground">{subheading}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {buttonText && (
            <Button onClick={onButtonClick} variant="outline">
              {buttonText}
            </Button>
          )}
          {paginate && (
            <div className="flex items-center gap-1">
              <Button
                disabled={currentPage === 1}
                onClick={() => handlePageChange("prev")}
                className="w-10 h-10 p-0"
                variant="outline"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="px-3 py-1 text-sm rounded-full border border-gray-300 dark:border-gray-600">
                {currentPage}
              </div>
              <Button
                disabled={data.length < pageSize}
                onClick={() => handlePageChange("next")}
                className="w-10 h-10 p-0"
                variant="outline"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Search */}
      {allowSearch && (
        <div className="border-b border-gray-100 p-5 dark:border-gray-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              onChange={(e) => onSearch?.(e.target.value)}
              className="pl-10"
              placeholder={`Search ${heading.toLowerCase()}...`}
            />
          </div>
        </div>
      )}

      {/* Table */}
      <div className="p-5 overflow-x-auto">
        <table className="min-w-full table-auto text-sm whitespace-nowrap">
          <thead>
            <tr>
              {Object.keys(tableHeaders).map((key) => {
                const header = tableHeaders[key];
                if (header.isHeaderVisible === false) return null;
                return (
                  <th
                    key={key}
                    className="border-b border-gray-200/50 pb-3 text-left font-semibold dark:border-gray-700"
                  >
                    {header.title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={Object.keys(tableHeaders).length}
                  className="text-center py-6 text-gray-500"
                >
                  No data available.
                </td>
              </tr>
            ) : (
              data.map((item, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-gray-100 dark:border-gray-700/50"
                >
                  {Object.keys(tableHeaders).map((key, index) =>
                    renderCell(key, item, rowIndex)
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
