function Patient({ paciente, setPaciente, eliminarPaciente }) {
	const handleEliminar = () => {
		const respuesta = confirm('¿Está seguro de eliminar el paciente?')
		if(respuesta){
			eliminarPaciente(paciente.id);
		}
	};

	return (
		<div className="px-5 py-5 m-3 bg-white rounded-lg shadow-md">
			<p className="mb-3 font-bold text-gray-700 uppercase">
				Nombre: {""}
				<span className="font-normal normal-case">
					{paciente.nombre}
				</span>
			</p>
			<p className="mb-3 font-bold text-gray-700 uppercase">
				Nombre del propietario: {""}
				<span className="font-normal normal-case">
					{paciente.propietario}
				</span>
			</p>
			<p className="mb-3 font-bold text-gray-700 uppercase">
				Email: {""}
				<span className="font-normal normal-case">
					{paciente.email}
				</span>
			</p>
			<p className="mb-3 font-bold text-gray-700 uppercase">
				Fecha: {""}
				<span className="font-normal normal-case">
					{paciente.fecha}
				</span>
			</p>
			<p className="mb-3 font-bold text-gray-700 uppercase">
				Sintomas: {""}
				<span className="font-normal normal-case">
					{paciente.sintomas}
				</span>
			</p>
			<div className="flex justify-between mt-10 ">
				<button
					className="px-10 py-2 font-bold text-white uppercase bg-indigo-600 rounded-lg hover:bg-indigo-700"
					type="button"
					onClick={() => setPaciente(paciente)}
				>
					Editar
				</button>
				<button
					className="px-10 py-2 font-bold text-white uppercase bg-red-600 rounded-lg hover:bg-red-700"
					type="button"
					onClick={handleEliminar}
				>
					ELiminar
				</button>
			</div>
		</div>
	);
}
export default Patient;
