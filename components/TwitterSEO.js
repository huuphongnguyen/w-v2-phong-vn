import Head from "next/head";

export default function TwitterSEO({
  currentURL,
  previewImage,
  siteName,
  pageTitle,
  description,
}) {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@isnhp" key="twhandle" />

        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
    </>
  );
}
