import { HeaderComponent } from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export function RootLayout() {
	return (
		<div>
			<HeaderComponent />
			<main>
				<Outlet />
			</main>
		</div>
	);
}
