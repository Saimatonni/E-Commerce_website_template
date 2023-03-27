import React from 'react'

const Categories = () => {
    const data = [
        {
            cateImg: "./images/category/gift1.jpeg",
            cateName: "Toys",
          },
          {
            cateImg: "./images/category/gift2.jpeg",
            cateName: "Chocolate",
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
          {
            cateImg: "./images/category/gift7.jpeg",
            cateName: "Gift 7",
          },
          {
            cateImg: "./images/category/gift8.jpeg",
            cateName: "Gift 8",
          },
          {
            cateImg: "./images/category/gift9.jpeg",
            cateName: "Gift 9",
          },
    ]
  return (
    <>
     <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
