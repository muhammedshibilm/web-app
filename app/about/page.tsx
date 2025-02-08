import Link from "next/link";

export default function Page(){

    return(
        <div className="h-screen flex justify-center items-center">
                <Link href={"/"}><button className="bg-gray-500 p-2 rounded-lg">Go back</button></Link>
        </div>
    )
}