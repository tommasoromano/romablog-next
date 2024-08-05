import Link from "./Link";
import SocialIcon from "./social-icons";

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon
            kind="mail"
            href={"mailto:info@tommasoromano.com"}
            size={6}
          />
          {/* <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} /> */}
          <SocialIcon
            kind="linkedin"
            href={"https://www.linkedin.com/in/tommaso-romano-developer/"}
            size={6}
          />
          <SocialIcon
            kind="twitter"
            href={"https://twitter.com/TommasoRomano_"}
            size={6}
          />
          {/* <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} /> */}
          <SocialIcon
            kind="resume"
            href={"https://tommasoromano.com/tommaso_romano_resume.pdf"}
            size={6}
          />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          {/* <div>{siteMetadata.author}</div>
          <div>{` • `}</div> */}
          <div>Tommaso Romano&apos;</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          {/* <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link> */}
        </div>
<div className="mb-2">
          🇮🇹🇻🇦🇸🇲🇪🇬🇪🇸🇫🇷🇩🇰🇸🇮🇭🇷🇬🇧🏴󠁧󠁢󠁥󠁮󠁧󠁿🇨🇭🇱🇮🇩🇪🇹🇷🇸🇪🇬🇷🇮🇸🇺🇸🇨🇦🇳🇱🇦🇹🇲🇨🇮🇱🇵🇸🇫🇮🇧🇪
        </div>
      </div>
    </footer>
  );
}
