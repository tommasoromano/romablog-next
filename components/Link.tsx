import Link from "next/link";
import type { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import { RainboWBg, RainbowText } from "./Rainbow";
import { ExternalLink } from "lucide-react";

const CustomLink = ({
  href,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    return <Link href={href} {...rest} />;
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default CustomLink;

export const TextLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    // <RainbowText>
    <span className="decoration-primary font-bold">
      <RainbowText>
        <CustomLink href={href ? href : "#"}>{children}</CustomLink>
      </RainbowText>
    </span>
    // </RainbowText>
  );
};
