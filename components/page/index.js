import Seo from '../seo';
import Navbar from './navigation/index';

const Page = ({ title, description, children }) => {
    return (
        <div className="pt-2 mx-auto min-h-screen w-full px-4 xl:w-8/12 lg:w-9/12">
            <Seo title={title} description={description} />
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Page;
