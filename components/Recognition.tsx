import { TextLink } from "./Link";

export const Recognition = ({
  title,
  link,
  tag,
  when,
  children,
  images,
}: {
  title: string;
  link: string;
  tag: string;
  when: string;
  children: React.ReactNode;
  images: { descr: string; src: string }[];
}) => {
  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="font-bold">
          <TextLink href={link}>{title}</TextLink>
        </div>
        <div>
          {tag} • {when}
        </div>
      </div>
      {/* <div>
        {tag} • {when}
      </div> */}
      <div className="mt-2">{children}</div>
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
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
