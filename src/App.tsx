import { useEffect, useState } from "react";

function App() {
	const [data, setData] = useState("");
	const fetchData = async () => {
		const response = await fetch("http://localhost:3000");
		const data = await response.text();
		setData(data);
	};
	useEffect(() => {
		fetchData();
	}, []);
	return <h1>{data}</h1>;
}

export default App;
