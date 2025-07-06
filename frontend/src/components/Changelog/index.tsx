"use client"
import React, { useState, useEffect } from "react";

// Define the shape of your changelog item
interface ChangelogItem {
  id: number;
  title: string;
  description: string;
  created_on: string;
}

export default function Changelog(){
  const [changelogs, setChangelogs] = useState<ChangelogItem[]>([]);

  useEffect(() => {
    const fetchChangelogs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/changelog/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: ChangelogItem[] = await response.json();
        setChangelogs(data);
      } catch (error) {
        console.error("Error fetching changelogs:", error);
      }
    };

    fetchChangelogs();
  }, []);

  return (
    <div className="relative md:my-24 py-5 dark:text-gray-100 max-w-7xl mx-auto">
      <div
        className="absolute bottom-0 left-0 top-0 flex w-10 flex-col justify-center md:w-12 lg:ml-40"
        aria-hidden="true"
      >
        <div className="mx-auto h-2.5 w-1 grow-0 rounded-t bg-gradient-to-b from-transparent to-pink-100 dark:to-pink-900" />
        <div className="mx-auto w-1 grow bg-pink-100 dark:bg-pink-900" />
        <div className="mx-auto h-2.5 w-1 grow-0 rounded-b bg-gradient-to-t from-transparent to-pink-100 dark:to-pink-900" />
      </div>

      <ul className="relative space-y-4 pl-10 md:pl-12 lg:ml-40">
        {changelogs.map((log) => (
          <li key={log.id} className="relative">
            <div className="absolute bottom-0 left-0 top-0 mt-5 flex w-10 -translate-x-full justify-center md:w-12">
              <div className="h-3 w-3 rounded-full bg-pink-500 ring ring-pink-100 ring-opacity-100 ring-offset-2 dark:bg-pink-300 dark:ring-pink-900 dark:ring-offset-gray-900" />
            </div>
            <div className="rounded-xl bg-gray-200 p-4 hover:ring hover:ring-gray-100 hover:ring-offset-2 dark:bg-gray-800 dark:ring-offset-gray-900 dark:hover:ring-gray-700">
              <h4 className="mb-2 font-semibold">{log.title}</h4>
              <p className="text-sm leading-relaxed">{log.description}</p>
            </div>
            <div className="px-4 py-2 lg:absolute lg:bottom-0 lg:left-0 lg:top-0 lg:-ml-12 lg:mt-4 lg:flex lg:w-40 lg:-translate-x-full lg:flex-col lg:p-0 lg:text-right">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {new Date(log.created_on).toLocaleDateString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

