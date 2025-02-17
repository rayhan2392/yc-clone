import SearchForm from "@/components/SearchForm";
import StartUpCard from "@/components/StartUpCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _id: 1,
      views: 43,
      _createdAt: new Date(),
      author: { _id: 1 ,name:'Rayhanul Karim'},
      description: "This is a post description",
      image:
        "https://res.cloudinary.com/dab8rppoj/image/upload/v1733077432/austin-distel-21GWwco-JBQ-unsplash_obkb82.jpg",
      category: "robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br />
          Connect with Entrepreuners
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on Pitches and Get Noticed on Virtual Competition.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for '${query}'` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.length ? (
            posts.map((post:StartUpCardType, index:number) => <StartUpCard key={post?._id} post={post} />)
          ) : (
            <p className="no-results">No Startup found</p>
          )}
        </ul>
      </section>
    </>
  );
}
