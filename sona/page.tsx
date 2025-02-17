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
      <div className='programist'>

        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <Image width={400} src="https://i.pinimg.com/736x/0e/48/39/0e48393bd61d30ea69fde643d9f0cc41.jpg" />
          <Image
            width={250}
            src="https://i.pinimg.com/736x/6a/62/48/6a62481b795b7f476e68081a4a288cb0.jpg"
          />
          <Image
            width={200}
            src="https://i.pinimg.com/736x/bb/47/16/bb4716949f167109ae14e6463cf90e0e.jpg"
          />
        </Image.PreviewGroup>
      </div>

    </div>
  );
}


