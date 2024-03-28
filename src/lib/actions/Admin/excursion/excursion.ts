"use server";
export async function DeleteExcursion(id: number): Promise<void> {
 try {
    const response = await fetch(`http://127.0.0.1:8000/excursion/delete/${id}`);

    if (!response.ok) {
      console.error(`Error al eliminar la excursión: ${response.statusText}`);
      return;
    }

 } catch (error) {
    console.error("Error de conexión a la base de datos:", error);
 }
}
