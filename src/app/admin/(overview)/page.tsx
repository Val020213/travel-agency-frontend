export default async function Page() {

  return (
    <div className='flex flex-col gap-4 sm:gap-8'>
      <h2 className='text-2xl font-semibold'>Administration Module</h2>
      <h3>Esta es la sección de administración de Travelix, aquí podrás realizar 
        acciones básicas en la base de datos.
      </h3>
      <h3>
        En la sección de agencias, hoteles, excursiones y paquetes podrás crear 
        eliminar modificar cualquiera de estás entidades. Además para una interfaz 
        más amigable podrás realizar búsaquedas para facilitar el acceso a datos.
      </h3>
      <h3>
        También podrás añadir o eliminar facilidades o usuarios.
      </h3>
    </div>
  );
}