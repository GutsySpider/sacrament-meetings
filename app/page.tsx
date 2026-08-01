import Image from "next/image";
export default async function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Sacrament Meeting Planner</h1>

        <p className="text-lg text-gray-600">
          View agendas, speakers, hymns, and announcements for upcoming
          sacrament meetings.
        </p>
      </section>

      <section className="flex justify-center">
        <Image
          src="/sacrament.jpg"
          alt="Sacrament meeting congregation"
          width={900}
          height={500}
          className="rounded-lg shadow-lg"
          priority
        ></Image>
      </section>
      <section className="card">
        <h2 className="mb-3 text-2xl font=semibold">Welcome</h2>
        <p>
          This application allows ward members and leaders to view sacrament
          meeting agendas, speakers, hymns, and announcements in one place.
        </p>
      </section>
    </div>
  );
}
