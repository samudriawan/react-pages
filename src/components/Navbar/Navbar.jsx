import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
	const toggleBtnRef = useRef(null);
	const navbarLinksRef = useRef(null);
	// console.log(toggleBtnRef.current);

	function handleToggleNavbar() {
		// console.log('click');
		// console.log(Object.keys(navbarLinksRef.current.children));
		const btnClass = Object.values(toggleBtnRef.current.classList);
		console.log(toggleBtnRef.current);

		// if (btnClass.indexOf('collapsed'))
		toggleBtnRef.current.classList.toggle('collapsed');
		// toggleBtnRef.current.attributes['aria-expanded'] = 'true';
		navbarLinksRef.current.classList.toggle('in');
		// navbarLinksRef.current.attributes['aria-expanded'] = 'true';
	}

	function handleNavLinksClicked(e) {
		console.log(e.target);
		toggleBtnRef.current.classList.add('collapsed');
		navbarLinksRef.current.classList.remove('in');
	}

	return (
		<header className="header_sticky">
			<div className="navbar-container">
				<a
					tabIndex="0"
					href="#main-content"
					aria-label="Skip to content"
					data-skip-link="true"
				>
					Skip to content
				</a>
				<nav className="navbar">
					<div className="navbar_brand">
						<NavLink to={'/'}>Brand Logo</NavLink>
					</div>
					<button
						className="navbar-toggle collapsed"
						ref={toggleBtnRef}
						onClick={handleToggleNavbar}
						type="button"
						data-target="collapse"
						aria-label="toggle navbar button"
						aria-expanded="false"
					>
						<span className="sr">Toggle navigation</span>
						<span className="icon-toggle"></span>
					</button>
					<div
						className="navbar_links collapse"
						ref={navbarLinksRef}
						aria-expanded="false"
					>
						<form className="form-search-navbar">
							<input
								type="text"
								name="search"
								id="search"
								placeholder="Search"
							/>
						</form>
						<NavLink to={'/'} onClick={(e) => handleNavLinksClicked(e)}>
							Home
						</NavLink>
						<NavLink onClick={(e) => handleNavLinksClicked(e)}>Project</NavLink>
						<NavLink
							to={'/about'}
							onClick={(e) => handleNavLinksClicked(e)}
							className="nav_link"
						>
							About
						</NavLink>
					</div>
				</nav>
			</div>
		</header>
	);
}
export default Navbar;
