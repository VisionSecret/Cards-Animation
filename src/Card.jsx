import React from "react";

const Card = () => {
  const data = [
    { img: "/Images/img1.png", title: "Developer" },
    { img: "/Images/img2.png", title: "Designer" },
    { img: "/Images/img3.png", title: "Manager" },
    { img: "/Images/img4.png", title: "Tester" },
    { img: "/Images/img5.png", title: "Analyst" },
    { img: "/Images/img6.png", title: "Marketer" },
  ];

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="card w-[350px] flex-shrink-0 sticky top-[15vh] text-center flex flex-col justify-center items-center gap-3 py-[15vh] px-20 mb-4 bg-[#383027] rounded-lg mx-auto"
        >
          <img src={item.img} alt="" className="w-[200px] object-cover" />
          <h1 className="text-3xl font-medium text-gray-200 mb-4">
            The <span className="text-white font-bold">{item.title}</span>
          </h1>
        </div>
      ))}
    </>
  );
};

export default Card;
