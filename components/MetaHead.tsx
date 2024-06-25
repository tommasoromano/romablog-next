import Head from "next/head";

const TITLE = "Tommaso Romano' - Software Developer Engineer";
const DESCRIPTION =
  "Hey, I'm Tommaso Romano'. A Software Developer Engineer based in Milan, Italy.";

const MetaHead = ({
  title,
  ogtitle,
  description,
  image,
  url,
  typeOfContent,
}: {
  title: string;
  ogtitle: string;
  description: string;
  image: string;
  url: string;
  typeOfContent: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={TITLE} />
      <meta name="description" content={description} />
      <meta
        name="keyword"
        content="Tommaso Romano Romano' Romanò software engineer developer designer react nodejs javascript programming web portfolio blog Milan Italy"
      ></meta>
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={ogtitle} />
      <meta property="og:type" content={typeOfContent} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content="@TommasoRomano_" />
      <meta property="twitter:creator" content="@TommasoRomano_" />
    </Head>
  );
};

MetaHead.defaultProps = {
  title: TITLE,
  ogtitle: TITLE,
  description: DESCRIPTION,
  image: "https://tommasoromano.com/images/default_tr.jpg",
  url: "https://tommasoromano.com",
  typeOfContent: "website",
};

export default MetaHead;
