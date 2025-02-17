import SearchForm from "../components/SearchForm";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup, <br />Connect with Entrepreuners</h1>
        <p className="sub-heading !max-w-3xl">Submit ideas, Vote on Pitches and Get Noticed on Virtual Competition.</p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
