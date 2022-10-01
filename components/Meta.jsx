import Head from "next/head";

export default function Meta({ title }) {
  const description = "Vintage Item Collections";
  const author = "Eugene";
  const twitter = "@4eug_";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>
        {title} 
      </title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta property="og:url" content="yourdomain.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
    </Head>
  );
}
