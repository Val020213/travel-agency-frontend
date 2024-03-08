export default function LayoutGrid({ children }: any) {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xlg:gird-cols-5 gap-6 p-4 md:p-6'>
      {children}
    </section>
  );
}
