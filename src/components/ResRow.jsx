const ResRow = ({rest,onEdit,onDelete}) => {

    const handleEdit = () => {
        console.log("Edit clicked for:", rest);
        onEdit(rest);
      }

      const handleDelete = () => {
        console.log("Delete clicked for ID:", rest.id);
        onDelete(rest.id);
      }

    return (
        <tr>
            <td>{rest.nombre}</td>
            <td>{rest.n_persona}</td>
            <td>{rest.fecha}</td>
            <td>{rest.estado}</td>
            <td>
                <button onClick={handleEdit}>editar 🖋</button>
                <button onClick={handleDelete}>Eliminar 🗑</button>
            </td>
        </tr>
    )
}

export default ResRow