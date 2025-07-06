"use client";
import fetchCategoriesWithTasks from "@/queries/roadmap/fetchCategoriesWithTasks";
import React, { useState } from "react";
import { useAsyncEffect } from "rooks";

export default function Roadmap() {
  const [categories, setCategories] = useState<RoadmapCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useAsyncEffect(async () => {
    try {
      const data = await fetchCategoriesWithTasks();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
      setLoading(false);
    }
  }
  , []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 dark:text-gray-100 max-w-7xl mx-auto py-20 px-6">
        {categories.map((category) => (
          <div key={category.id} className="space-y-3 rounded-lg bg-gray-200/75 p-3.5 dark:bg-gray-700/75">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{category.title}</h3>
            </div>
            <div className="space-y-3">
              {category.tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100"
                >
                  <div className="bg-gray-50 px-5 py-4 dark:bg-gray-700/50">
                    <h3 className="font-medium p-2">{task.title}</h3>
                  </div>
                  <div className="grow p-5">
                    <p>{task.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
