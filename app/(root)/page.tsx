import StartupCard from "@/components/StartupCard";
import SearchForm from "./../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: "55",
      author: { _id: 1 , name:"Ahad"},
      _id: 1,
      description: "This is a description",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.vo6jTsxHWHt3ilwaQU2GnQHaHa&pid=Api&P=0&h=220",
      category: "movie",
      title: "Shahrukh Khan",
    },
  ];

  return (
    <>
      <section className="w-full bg-pink-600 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
          Pitch Your Startup, <br />
          Connect with Entreprenuers
        </h1>
        <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in virtual competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="font-semibold text-[30px] text-black">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="">No Startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
