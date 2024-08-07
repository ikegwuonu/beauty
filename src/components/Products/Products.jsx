import React, { useState } from 'react'
import css from './Products.module.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Products = () => {
    const [parent]=useAutoAnimate();
    const [menuProducts, setMenuProducts]=useState(ProductsData);

    const filter=(type)=>{
        setMenuProducts(ProductsData.filter((product)=>
        product.type === type))
    }
  return (
    <div className={css.container}>
        <img src={Plane} alt="" />
        <h1>Our Featured products</h1>

        <div className={css.products}>
            <ul className={css.menu}>
                <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                <li onClick={()=>filter('skin care')}>Skin Care</li>
                <li onClick={()=>filter('conditioner')}>Conditioners</li>
                <li onClick={()=>filter('foundation')}>Foundations</li>
            </ul>
            <div className={css.list} ref={parent}>
                {
                    menuProducts.map((product,i)=>(
                        <div className={css.product} key={i}>
                            <div className="left-s">
                                <div className="name">
                                    <span>{product.name}</span><br />
                                    <span>{product.detail}</span>
                                </div>
                                <span>${product.price}</span>
                                <div>Shop Now</div>
                            </div>
                            <img src={product.img} className='img_' alt="" />
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Products