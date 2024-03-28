"use server";
export async function DeleteHotel(id: number): Promise<void> {

 try {
    const response = await fetch(`http://127.0.0.1:8000/hotel/delete/${id}`);

    if (!response.ok) {
      console.error(`Error al eliminar el hotel: ${response.statusText}`);
      return;
    }

 } catch (error) {
    console.error("Error de conexión a la base de datos:", error);
 }
}
