import ResRow from "./ResRow";

function ResTable ({rests,onEdit,onDelete}) {

    return (       
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>N_personas</th>
                    <th>Fecha y Hora</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
            {rests && rests.length > 0 ? (
                    rests.map((rest) => (
                        <ResRow key={rest.id} rest={rest} onEdit={onEdit} onDelete={onDelete} />
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No hay reservas disponibles</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default ResTable