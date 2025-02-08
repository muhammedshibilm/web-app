import Link from "next/link";

export default function Home() {
  return (
      <div className="flex justify-center items-center h-screen flex-col space-y-4">
        <h1 className="bg-red-500 md:bg-green-500 lg:bg-violet-500 xl:bg-gray-500 ">Hi, M</h1>
        <Link href={"/about"}>Ita a about page</Link>
      </div>
  );
}
