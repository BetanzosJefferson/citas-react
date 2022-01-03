import Patient from "./Patient";
function ListPatients({ pacientes, setPaciente, eliminarPaciente }) {
	return (
		<div className="h-screen md:overflow-y-scroll md:w-1/2 lg:w-3/5">
			{pacientes && pacientes.length ? (
				<>
					<h2 className="text-3xl font-black text-center">
						Listado de pacientes
					</h2>
					<p className="mt-5 mb-10 text-xl text-center">
						Administra a tus {""}
						<span className="font-bold text-indigo-600">
							Pacientes y Citas
						</span>
					</p>
					{pacientes.map((paciente) => (
						<Patient
							key={paciente.id}
							paciente={paciente}
							setPaciente={setPaciente}
							eliminarPaciente={eliminarPaciente}
						/>
					))}
				</>
			) : (
				<>
					<h2 className="text-3xl font-black text-center">
						No hay pacientes
					</h2>
					<p className="mt-5 mb-10 text-xl text-center">
						Empiece llenando el formulario para agregar {""}
						<span className="font-bold text-indigo-600">
							Pacientes y Citas
						</span>
					</p>
				</>
			)}
		</div>
	);
}
export default ListPatients;
