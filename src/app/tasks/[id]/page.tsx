type TaskPageProps = {
  params: { id: string };
};

export default async function TaskPage({ params }: TaskPageProps) {
  const { id } = await params;
  return (
    <div>
      <h1>hello {id}</h1>
    </div>
  );
}
