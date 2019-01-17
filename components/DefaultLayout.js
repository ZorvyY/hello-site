// Like layout, but header and footer included.

import Header from './Header'
import Footer from './Footer'
import Layout from './Layout'


const DefaultLayout = (props) => (
    <>
        <Header />
        <Layout {...props} />
        <Footer />
    </>
);

export default DefaultLayout;