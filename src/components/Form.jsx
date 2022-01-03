import { useState, useEffect } from "react";
import Error from "./MessageError";
function Form({ pacientes, setPacientes, paciente, setPaciente }) {
	//=====usestate
	const [nombre, setNombre] = useState("");
	const [propietario, setPropietario] = useState("");
	const [email, setEmail] = useState("");
	const [fecha, setFecha] = useState("");
	const [sintomas, setSintomas] = useState("");
	const [error, setError] = useState(false);

	//=====usestate
	useEffect(() => {
		if (Object.keys(paciente).length > 0) {
			setNombre(paciente.nombre);
			setPropietario(paciente.propietario);
			setEmail(paciente.email);
			setFecha(paciente.fecha);
			setSintomas(paciente.sintomas);
		}
	}, [paciente]);

	//Validador del formulario
	const handleSubmit = (e) => {
		e.preventDefault();
		if ([nombre, propietario, email, fecha, sintomas].includes("")) {
			setError(true);
			return;
		}
		setError(false);

		//Generar ID
		const generarId = () => {
			const fecha = Date.now().toString(36);
			const random = Math.random().toString(36).substring(2);
			return fecha + random;
		};

		//Construyendo objeto de paciente para pasarlo al setPacintes
		const objetoPaciente = {
			nombre,
			propietario,
			email,
			fecha,
			sintomas,
			id: generarId(),
		};

		if (paciente.id) {
			objetoPaciente.id = paciente.id;
			console.log("Editando");

			const pacientesActualizados = pacientes.map((pacienteState) =>
				pacienteState.id == paciente.id ? objetoPaciente : pacienteState
			);
			setPacientes(pacientesActualizados)
			setPaciente({})
		} else {
			objetoPaciente.id = generarId();
			setPacientes([...pacientes, objetoPaciente]);
		}

		//Limpiar el formulario una vez enviado el paciente
		setNombre("");
		setPropietario("");
		setEmail("");
		setFecha("");
		setSintomas("");
	};
	return (
		<div className="mx-5 md:w-1/2 lg:w-2/5">
			<h2 className="text-3xl font-black text-center">
				List of patients
			</h2>
			<p className="mt-5 mb-10 text-xl text-center">
				Añade pacientes y {""}
				<span className="font-bold text-indigo-600">administralos</span>
			</p>
			<form
				onSubmit={handleSubmit}
				className="px-5 py-10 mb-10 bg-white rounded-lg shadow-md"
			>
				{error && <Error />}
				<div className="mb-5">
					<label
						htmlFor="pet"
						className="block font-bold text-gray-700 uppercase"
					>
						Nombre de la mascota
					</label>

					<input
						id="pet"
						className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
						type="text"
						placeholder="Nombre de la mascota"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="owner"
						className="block font-bold text-gray-700 uppercase"
					>
						Nombre del propietario
					</label>

					<input
						id="owner"
						className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
						type="text"
						placeholder="Nombre del propietario"
						value={propietario}
						onChange={(e) => setPropietario(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="email"
						className="block font-bold text-gray-700 uppercase"
					>
						Email
					</label>

					<input
						id="pet"
						className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="mb-5">
					<label
						htmlFor="date"
						className="block font-bold text-gray-700 uppercase"
					>
						Alta
					</label>

					<input
						id="date"
						className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
						type="date"
						placeholder="Email"
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="symptom"
						className="block font-bold text-gray-700 uppercase"
					>
						Sintomas
					</label>
					<textarea
						id="symptom"
						className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
						placeholder="Describe los sintomas"
						value={sintomas}
						onChange={(e) => setSintomas(e.target.value)}
					/>{" "}
				</div>

				<input
					className="w-full p-3 font-bold text-white uppercase bg-indigo-600 cursor-pointer hover:bg-indigo-700 transition-colors"
					type="submit"
					value={
						paciente.id ? "Editar paciente" : "Registrar paciente"
					}
				/>
			</form>
		</div>
	);
}
export default Form;
