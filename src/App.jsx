import { useState, useEffect } from "react";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import ListPatients from "./components/ListPatients.jsx";
function App() {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});
	const eliminarPaciente = (id) => {
		const pacientesActualizado = pacientes.filter(
			(paciente) => paciente.id !== id
		);
		setPacientes(pacientesActualizado);
	};
	useEffect(() => {
		const obtenerLocalStorage = () => {
			const pacicientesLS =
				JSON.parse(localStorage.getItem("pacientes")) ?? [];
			setPacientes(pacicientesLS);
		};
		obtenerLocalStorage();
	}, []);
	useEffect(() => {
		localStorage.setItem("pacientes", JSON.stringify(pacientes));
		console.log("Componente Listo");
	}, [pacientes]);

	return (
		<div className="container mx-auto mt-20">
			<Header />

			<div className="mt-12 md:flex">
				<Form
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>

				<ListPatients
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	);
}
export default App;
