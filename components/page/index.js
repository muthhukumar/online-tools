import Seo from '../seo';

const Page = ({ title, description, children }) => {
    return (
        <div className="mx-auto min-h-screen w-full px-4 xl:w-8/12 lg:w-9/12">
            <Seo title={title} description={description} />
            <main>{children}</main>
        </div>
    );
};

export default Page;
