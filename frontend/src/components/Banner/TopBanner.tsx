"use client";
import React, { useEffect, useState } from "react";
import useGetBannerDetails from "@/queries/communication/FetchBannerDetails";
import Link from "next/link";
import { Button } from "../ui/button";
const TopBanner = () => {
  const { data: bannerDetails, isLoading } = useGetBannerDetails();

  const [timeRemaining, setTimeRemaining] = useState<string>();
  const [showBanner, setShowBanner] = useState<boolean>(false);

  function formatTimeRemaining(remainingTime: number): string {
    const seconds = Math.floor(remainingTime / 1000) % 60;
    const minutes = Math.floor(remainingTime / (1000 * 60)) % 60;
    const hours = Math.floor(remainingTime / (1000 * 60 * 60)) % 24;
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  useEffect(() => {
    if (bannerDetails && bannerDetails?.expired_on) {
      const updateRemainingTime = () => {
        const expiredTime = new Date(bannerDetails.expired_on).getTime();
        const currentTime = new Date().getTime();
        const remainingTime = Math.max(expiredTime - currentTime, 0);

        setTimeRemaining(
          formatTimeRemaining(remainingTime > 0 ? remainingTime : 0),
        );
      };

      updateRemainingTime();

      const intervalId = setInterval(updateRemainingTime, 1000);

      return () => clearInterval(intervalId);
    }
  }, [bannerDetails, isLoading]);

  useEffect(() => {

    setShowBanner(
    
    !!!isLoading &&
    
    bannerDetails &&
    
    bannerDetails?.description &&
    
    !bannerDetails?.is_expired &&
    
    (!bannerDetails?.expired_on || new Date(bannerDetails.expired_on) > new Date())
    
    );
    
    }, [timeRemaining, bannerDetails, isLoading]);

  if (isLoading || !showBanner) {
    return null;
  }

  return (
    <div>
      {showBanner && (
        <div>
          {/* Banners: Top Fixed */}
          <div className="bg-pink-700 top-0 shadow-lg w-full">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-8 items-center p-4 xl:max-w-7xl">
              <div className="col-span-1 sm:col-span-6 md:col-span-7 items-center space-y-0 sm:space-x-2 sm:flex text-pink-50 sm:text-lg mx-auto">
                <div>
                  <p className="text-sm">{bannerDetails?.description}</p>
                </div>
                <Button
                  type="button"
                  variant={"destructive"}
                  className=""
                >
                  <Link href={bannerDetails?.button_link ?? "#"}>
                    {bannerDetails?.button_name}
                  </Link>
                </Button>
              </div>
              { bannerDetails?.expired_on && (
                <div className="flex mt-4 md:mt-0 items-center border border-white rounded-lg p-1 sm:col-span-2 md:col-span-1">
                  {timeRemaining !== null && (
                    <div className="text-base text-white mx-auto">
                      {timeRemaining}
                    </div>
                  ) }
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBanner;
