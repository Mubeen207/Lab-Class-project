import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
export default function Home(props) {
  const { userData } = props;
  if (!userData) return <p>Loading...</p>;

  let usersList = userData.map((data) => (
    <Link key={data.id} href={`/posts/${data.id}`}>
      {" "}
      <div
        key={data.id}
        className="border w-122 h-auto bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex items-start p-2">
          <Image
            src="/post-image.png"
            alt="Profile"
            width={85}
            height={85}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-gray-900 text-[20px]">user_name</p>
            <p className="text-gray-500 text-xs">15 min</p>
          </div>
        </div>

        <div className="px-5 py-2 text-[20px]">
          <p className="font-semibold">{data.title}</p>
        </div>

        <div className="py-3 px-5 bg-white text-[28px] ">
          <p>{data.body}</p>
        </div>

        <div className="px-10 py-2 flex items-center justify-between h-15 gap-4 text-gray-500 text-[20px] border-t">
          <button className="hover:text-blue-500">Like</button>
          <button className="hover:text-blue-500">Comment</button>
          <button className="hover:text-blue-500">Share</button>
        </div>
      </div>
    </Link>
  ));

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta
          name="homePage"
          content="This is a home page showing a Home Text"
        />
      </Head>
      <Head>
        <meta name="author" content="Mubeen Ul Islam" />
      </Head>
      <div className="grid justify-center items-center gap-4 p-2 bg-[#093a7a]">
        {usersList}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      userData: data,
    },
  };
}
