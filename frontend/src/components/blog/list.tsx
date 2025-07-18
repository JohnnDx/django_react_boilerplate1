"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { IBlogList, ICategory } from "./types";
import { useState } from "react";
import BlogCard from "./card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useFeedbackModalContext } from "@/contexts/ModalProvider";
import { Button } from "@/components/ui/button";
interface IBlogCardProps extends IBlogList {
  categories: ICategory[];
}
export default function BlogList(props: IBlogCardProps) {
  const { blogs, categories } = props;

  const [blogList, setBlogList] = useState<IBlogList>();
  const router = useRouter();
  const params = useSearchParams();
  const page = parseInt(params.get("page") ?? "1");
  const { openFeedbackModal } = useFeedbackModalContext();

  const changePage = (delta: number) => {
    router.push(`/blog?page=${page + delta}`);
  };

  return (
    <>
      {/* Blog List Section: Featured Posts */}
      <div className="">
        <div className="container mx-auto space-y-4 px-4  py-4 lg:px-8 lg:py-8  xl:max-w-7xl">
          {/* Heading */}
          <div className="flex items-center justify-between border-b py-2 dark:border-gray-700/75">
            <h3 className="font-bold uppercase tracking-wide">Blogs</h3>
            <div>
              {page > 1 && (
                <Button
                  onClick={() => {
                    changePage(-1);
                  }}
                  type="button"
                  className=""
                  variant={"outline"}
                >
                  <ChevronLeft className="inline-block h-5 w-5" />
                </Button>
              )}
              {blogs.length > 0 && (
                <Button
                  onClick={() => {
                    changePage(1);
                  }}
                  variant={"outline"}
                  type="button"
                  className=""
                >
                  <ChevronRight className="inline-block h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
          {/* END Heading */}

          {/* Blog Posts */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {blogs.map((blog, idx: number) => {
              return <BlogCard key={idx} {...blog} />;
            })}
          </div>
          {/* END Blog Posts */}
        </div>
      </div>
      {/* END Blog List Section: Featured Posts */}
    </>
  );
}
