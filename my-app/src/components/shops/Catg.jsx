import React from "react"
const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/gift1.jpeg",
      cateName: "Gift 1",
    },
    {
      cateImg: "./images/category/gift2.jpeg",
      cateName: "Gift 2",
    },
    {
      cateImg: "./images/category/gift3.jpeg",
      cateName: "Gift 3",
    },
    {
      cateImg: "./images/category/gift4.jpeg",
      cateName: "Gift 4",
    },
    {
      cateImg: "./images/category/gift5.jpeg",
      cateName: "Gift 5",
    },
    {
      cateImg: "./images/category/gift6.jpeg",
      cateName: "Gift 6",
    },
  ]
  return (
    <>
      <div className='category'>
      <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg