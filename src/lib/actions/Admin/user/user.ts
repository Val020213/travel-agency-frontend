export async function DeleteUser(id: number): Promise<void> {
 try {
    const response = await fetch(`http://127.0.0.1:8000/tourist/delete/${id}`);

    if (!response.ok) {
      console.log(response.statusText);
      return;
    }

 } catch {
    console.log("Database Connection Error");
 }
}
