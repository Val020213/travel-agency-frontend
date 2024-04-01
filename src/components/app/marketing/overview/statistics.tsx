'use client';
export default async function ExcelExport({endpoint, title}: {endpoint: string, title: string}) {
     const downloadExcel = async () => {
    try {
      const response = await fetch(endpoint); // Cambia la URL a tu endpoint de FastAPI
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = title+'.xlsx'; 
      link.click();
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  };
  return (
    <div>
      <button onClick={downloadExcel}>Descargar Excel de {title}</button>
    </div>
  );
}