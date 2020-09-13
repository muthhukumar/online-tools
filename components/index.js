import Seo from '../seo';

const Page = ({ title, description, children }) => {
    return (
        <div className="mx-auto flex justify-center flex-col max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-2xl xl:max-w-4xl min-h-screen">
            <Seo title={title} description={description} />
            <main>{children}</main>
        </div>
    );
};

export default Page;
