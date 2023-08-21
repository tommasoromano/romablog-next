import Head from 'next/head';

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
      <meta
        name="title"
        content="Tommaso Romanò - Software Engineer"
      />
      <meta name="description" content={description} />
      <meta
        name="keyword"
        content="Tommaso Romano Romanò software engineer developer freelancer designer react nodejs javascript programming web portfolio blog Milan Italy"
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
  title: 'Tommaso Romanò - Software Engineer',
  ogtitle: 'Tommaso Romanò - Software Engineer',
  description:
    "Hey, I'm Tommaso. A Software Engineer based in Milan, Italy. I love design as much as Software Development. I work with JavaScript, TypeScript, React, Node.js & MongoDB.",
  image: 'https://tommasoromano.com/images/default_tr.jpg',
  url: 'https://tommasoromano.com',
  typeOfContent: 'website',
};

export default MetaHead;
