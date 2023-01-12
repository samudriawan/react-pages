import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
}
export default Layout;
