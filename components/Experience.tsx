import { useState, useEffect } from "react";
import { TextLink } from "./Link";

export const Experience = ({
  company,
  logo,
  position,
  where,
  startDate,
  endDate,
  duration,
  techs,
  images,
  children,
}: {
  company: string;
  logo: string;
  position: string;
  where: string;
  startDate: string;
  endDate: string;
  duration: string;
  techs: string;
  images: { descr: string; src: string }[];
  children: React.ReactNode;
}) => {
  return (
    <div className="flex w-full max-w-full flex-col space-y-2 text-sm md:flex-row md:space-y-0">
      <div className="flex shrink-0 space-x-4 md:w-2/12">
        <div
          className="h-16 w-16 rounded-md bg-cover bg-center"
          style={{
            backgroundImage: `url(${logo})`,
          }}
        ></div>
        <div className="block flex flex-col text-sm md:hidden">
          <div className="font-bold">{position}</div>
          <div>
            {company} • {where}
          </div>
          <div>
            {startDate} - {endDate} ({duration})
          </div>
        </div>
      </div>
      <div className="relative md:w-10/12">
        <div className="absolute right-0 top-0 hidden text-right md:block">
          <div>
            <div>
              {startDate} - {endDate}
            </div>
            <div>{duration}</div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="font-bold">{position}</div>
          <div>
            {company} • {where}
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-1 md:mt-4">
          {children}
          <div>
            <span className="font-bold">Tech: </span>
            {techs}
          </div>
          {images.length > 0 && (
            <div className="relative max-w-full overflow-hidden">
              {/* <div className="absolute inset-0"> */}
              <div className="relative overflow-auto pt-2">
                <div className="flex flex-nowrap space-x-2">
                  {images.map((image, i) => (
                    <div
                      key={i}
                      className="aspect-[16/9] h-32 rounded-md bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${image.src})`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              {/* </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
