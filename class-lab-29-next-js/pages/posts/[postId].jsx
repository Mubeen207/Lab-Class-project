import React from "react";
import Image from "next/image";
import Head from "next/head";
export default function Home(props) {
  const { userData } = props;
  console.log(userData);
  if (!userData) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>{userData.title}</title>
        <meta name="description" content={userData.body} />
        <meta name="author" content="Mubeen" />
      </Head>
      <div className="flex items-center justify-center h-screen w-full bg-[#093a7a]">
        <div
          key={userData.id}
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
              <p className="font-semibold text-gray-900 text-[20px]">
                user_name
              </p>
              <p className="text-gray-500 text-xs">15 min</p>
            </div>
          </div>

          <div className="px-5 py-2 text-[20px]">
            <p className="font-semibold">{userData.title}</p>
          </div>

          <div className="py-3 px-5 bg-white text-[28px] h-110">
            <p>{userData.body}</p>
          </div>

          <div className="px-10 py-2 flex items-center justify-between h-15 gap-4 text-gray-500 text-[20px] border-t">
            <button className="hover:text-blue-500">Like</button>
            <button className="hover:text-blue-500">Comment</button>
            <button className="hover:text-blue-500">Share</button>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { postId } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  const data = await response.json();

  return {
    props: {
      userData: data,
    },
    revalidate: 10,
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          postId: "1",
        },
      },
    ],
    fallback: "blocking",
  };
}
