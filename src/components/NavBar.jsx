import { useState, useEffect } from "react";

function NavBar() {
	const [theme, setTheme] = useState("light");

	function toggleTheme() {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	return (
		<div className="nav-bar">
			<ul>
				<a
					href="https://www.linkedin.com/in/august-colonna"
					target="_blank"
					rel="noreferrer"
				>
					<li>LinkedIn</li>
				</a>
				<a
					href="https://github.com/augustcolonna"
					target="_blank"
					rel="noreferrer"
				>
					<li>Git Hub</li>
				</a>
				<a>
					<li>Resume | CV</li>
				</a>
				<li></li>
			</ul>
			<button className="theme-button" onClick={toggleTheme}>
				Toggle Theme
			</button>
		</div>
	);
}

export default NavBar;
