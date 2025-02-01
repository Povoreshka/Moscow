"use client"
import { Button, Popover, Space } from "antd";
import Image from "next/image";
import { Steps } from "antd";
import { Avatar } from "antd";
import img1 from "../../public/57cfedcafe705796f8b9c980c0cfe0e0.jpg"
import img2 from "../../public/5f1b83ec8116c191d6b9ddffdc7a1c5e.jpg"
import img3 from "../../public/fbe0aafacc762217ccdbb65acc1446d0.jpg"
import React from 'react';
import { QRCode } from 'antd';



const description = 'П*здец';


export default function Home() {
  return (
    <div className="Moscow">
      <p >Меня зовут Маша, а еще есть Соня и Поварешка и мы летим в Moscow</p>
      <Space>
        <Space direction="vertical" align="center">
          <Popover content={<QRCode value="https://t.me/Sonechka_ssss" bordered={false} />}>
            <Avatar size={150} icon={<Image src={img1} alt={description} />} />
          </Popover>
          Соня
        </Space>
        <Space direction="vertical" align="center">
          <Popover content={<QRCode value="https://t.me/Sovaaaaq" bordered={false} />}>
            <Avatar size={150} icon={<Image src={img2} alt={description}/>} />
          </Popover>
            <Button type="primary" href={"/masha"}>
                <a href="/masha" style={{textDecoration: "none", color: "inherit"}}>Машуко</a>
            </Button>
        </Space>
          <Space direction="vertical" align="center">
              <Popover content={<QRCode value="https://t.me/povoreshka1" bordered={false} />}>
            <Avatar size={150} icon={<Image src={img3} alt={description} />} />
          </Popover>
          Катя
        </Space>
      </Space>
      <Steps
        current={1}
        items={[
          {
            title: 'Челябинск',
            description,
          },
          {
            title: 'Москва',
            description,
          }, {
            title: 'Ленин',
            description,
          },
          {
            title: 'Яндекс 46 этаж',
            description,
          },
          {
            title: 'Челябинск',
            description,
          },
        ]}
      />
      <div className="App">
        <Button type="primary">Полетели</Button>
      </div>


    </div>
  );
}
