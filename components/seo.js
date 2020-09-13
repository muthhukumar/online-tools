import Head from 'next/head';

const SEO = ({
    title = 'Harvest thoughts',
    description = 'Harvest the thoughts when it came to mind. So later we can come and get the what we want',
    children,
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="og:title" content={title} />

            <meta name="description" content={description} />
            <meta name="og:description" content={description} />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="Content-Language" content="en" />

            <meta name="twitter:site" content="@0_void_" />
            <meta
                name="apple-mobile-web-app-title"
                content="Harvest-thoughts"
            />
            <meta name="author" content="muthukumar" />
            {children}
        </Head>
    );
};

export default SEO;
