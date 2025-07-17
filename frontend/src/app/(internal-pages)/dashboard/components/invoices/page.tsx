"use client";

import React, { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
  SearchIcon
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type Invoice = {
  id: string;
  date: string;
  status: string;
  plan: string;
};

const INVOICES: Invoice[] = [
  { id: "Invoice #2", date: "Sep 5, 2024 8:50", status: "Paid", plan: "Basic plan" },
  { id: "Invoice #51", date: "Aug 26, 2024 3:01", status: "Paid", plan: "Basic plan" },
  { id: "Invoice #4", date: "Sep 18, 2024 9:05", status: "Paid", plan: "Basic plan" },
  { id: "Invoice #3", date: "Sep 11, 2024 3:26", status: "Paid", plan: "Business plan" },
  { id: "Invoice #11", date: "Sep 19, 2024 2:03", status: "Paid", plan: "Basic plan" },
];

export default function InvoicesPage() {
  const t = useTranslations("billing.invoices");
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  const filteredInvoices = useMemo(() => {
    const term = search.trim().toLowerCase();
    return INVOICES.filter((invoice) =>
      invoice.id.toLowerCase().includes(term) ||
      invoice.plan.toLowerCase().includes(term) ||
      invoice.date.toLowerCase().includes(term) ||
      invoice.status.toLowerCase().includes(term)
    );
  }, [search]);

  const pageCount = Math.ceil(filteredInvoices.length / rowsPerPage);
  const paginatedData = filteredInvoices.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-muted-foreground mt-2">{t("subtitle")}</p>
      </div>

      {/* Search + Download */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative w-full md:w-1/3">
          <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("searchPlaceholder")}
            className="pl-10"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
        <Button variant="outline">
          <DownloadIcon className="mr-2 h-4 w-4" />
          {t("download")}
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("columns.invoice")}</TableHead>
              <TableHead>{t("columns.date")}</TableHead>
              <TableHead>{t("columns.status")}</TableHead>
              <TableHead>{t("columns.plan")}</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length ? (
              paginatedData.map((invoice, idx) => (
                <TableRow key={idx}>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell>{invoice.plan}</TableCell>
                  <TableCell className="text-right">•••</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  {t("noResults")}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Rows per page */}
        <div className="flex items-center gap-2">
          <Label className="whitespace-nowrap">{t("rowsPerPage")}</Label>
          <Select
            value={rowsPerPage.toString()}
            onValueChange={(value) => {
              setRowsPerPage(+value);
              setPage(1);
            }}
          >
            <SelectTrigger className="w-[65px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Page range + controls */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {filteredInvoices.length === 0
              ? "0"
              : `${(page - 1) * rowsPerPage + 1}-${Math.min(
                  page * rowsPerPage,
                  filteredInvoices.length
                )}`}{" "}
            {t("of")} {filteredInvoices.length}
          </span>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label={t("prevPage")}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label={t("nextPage")}
                  onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                  disabled={page >= pageCount}
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
