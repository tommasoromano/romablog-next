import { ExternalLink } from "lucide-react";
import { TextLink } from "./Link";
import Image from "next/image";

export const Recognition = ({
  title,
  link,
  tag,
  when,
  techs,
  children,
  images,
}: {
  title: string;
  link: string;
  tag: string;
  when: string;
  techs: string;
  children: React.ReactNode;
  images: { descr: string; src: string }[];
}) => {
  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex gap-2 font-bold">
          {link !== "" && <TextLink href={link}>{title}</TextLink>}
          {link === "" && title}
          {/* {link !== "" && <ExternalLink className="h-4 w-4" />} */}
        </div>
        <div>
          {tag !== "" && tag + " • "}
          {when}
        </div>
      </div>
      {/* <div>
        {tag} • {when}
      </div> */}
      <div className="mt-2">
        {children}
        {techs !== "" && (
          <div>
            <span className="font-bold">Tech: </span>
            {techs}
          </div>
        )}
      </div>
      {images.length > 0 && (
        <div className="relative max-w-full overflow-hidden">
          <div className="relative overflow-auto pt-2">
            <div className="flex flex-nowrap space-x-2">
              {images.map((image, i) => (
                <div
                  key={i}
                  className="aspect-[16/9] h-32 rounded-md bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image.src})`,
                  }}
                >
                  {/* <Image
                    src={image.src}
                    alt={image.descr}
                    width={128 * (16 / 9)}
                    height={128}
                    className="rounded-md"
                  /> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
