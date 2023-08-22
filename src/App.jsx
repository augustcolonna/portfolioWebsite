import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";

import "./stylesheets/main-styles.scss";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route
					path="/"
					element={
						<>
							<LandingPage />
						</>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
