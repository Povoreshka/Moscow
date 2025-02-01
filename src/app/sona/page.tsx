"use client"
import React from 'react';
import { Image } from 'antd';

const description = 'П*здец';


export default function Home() {
  return (
    <div className="Moscow">
      <p>Она хотела быть киберспортсменкой валоранта...</p>

<div className='valorant'>
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
        }}
      >
        <Image width={500} src="https://wallpapers.com/images/hd/valorant-fade-n4ht4snzvdt9o6od.jpg" />
        <Image
          width={500}
          src="https://missariana.ru/wp-content/uploads/2023/12/valorant-gekko.jpg"
        />
        <Image
          width={500}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rHBxfp9Wu89bJT3B2EMlUCpSWdML-T2goA&s"
        />
      </Image.PreviewGroup>

</div>
 <p>но она программист</p>

 
    </div>
  );
}


