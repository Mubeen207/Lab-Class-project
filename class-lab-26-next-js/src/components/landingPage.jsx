import React from "react";
import Header from "./header";
import Image from "next/image";
const list = [
  {
    src: "/images/Blog-01.webp",
    text: "eslint-disable-next-line react/jsx-key eslint-disable-next-line",
    right: "Right Text",
    left: "Left Text",
  },
  {
    src: "/images/Blog-02.avif",
    text: "eslint-disable-next-line react/jsx-key eslint-disable-next-line",
    right: "Right Text",
    left: "Left Text",
  },
  {
    src: "/images/Blog-03.jfif",
    text: "eslint-disable-next-line react/jsx-key eslint-disable-next-line",
    right: "Right Text",
    left: "Left Text",
  },
];
function landingPage() {
  return (
    <>
      <div className="pt-5">
        <h1 className="text-2xl text-center">Populur Blogs</h1>
        <div className="flex gap-2 w-full justify-center">
          {list.map((obj, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div key={index} className="border w-75 rounded-3xl">
                <div>
                  <Image
                    src={obj.src}
                    alt="My profile"
                    width={300}
                    height={152}
                    className="w-75 h-38 rounded-3xl"
                  />
                  <p className="p-1">{obj.text}</p>
                </div>
                <div className="flex justify-between p-1">
                  <p>{obj.left}</p>
                  <p>{obj.right}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Image
          src="/images/Blog-04.avif"
          alt="My profile"
          width={3000}
          height={1000}
          className="w-1500 h-150"
          />
        <div className="border">
          <div className="border">
            <div className="border flex flex-col w-100">
              <h1>Why I Started Blogi</h1>
              <p>
                eslint-disable-next-line react/jsx-key eslint-disable-next-line
                eslint-disable-next-line react/jsx-key eslint-disable-next-line
              </p>
            </div>
            <div className="flex items-center">
              {/* // eslint-disable-next-line react/jsx-key */}
              <Image
                src="/images/imran-Khan.jfif"
                alt="My profile"
                width={300}
                height={152}
                className="w-25 h-25 rounded-full"
              />
              <div>
                <p>Imran Khan</p>
                <p>05 OCT 1952</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default landingPage;


// https://cdn.dribbble.com/userupload/4458125/file/original-f9462e8d63547521519f96c86567c7a7.png?resize=752x&vertical=center