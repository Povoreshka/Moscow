"use client"
import { Button, Popover, Space } from "antd";
import Image from "next/image";
import { Steps } from "antd";
import { Avatar } from "antd";
import img1 from "../../public/57cfedcafe705796f8b9c980c0cfe0e0.jpg"
import img2 from "../../public/5f1b83ec8116c191d6b9ddffdc7a1c5e.jpg"
import img3 from "../../public/fbe0aafacc762217ccdbb65acc1446d0.jpg"
import React from 'react';
import { Input, QRCode } from 'antd';
import { Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'

const description = 'П*здец';


export default function Home() {
  return (
    <div className="Moscow">
      <Statistic
          title="Проектов задудосила"
          value={12}
          valueStyle={{ color: '#3f8600' }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      <Statistic
      title="Losestreak"
      value={100}
      valueStyle={{ color: '#cf1322' }}
      prefix={<ArrowDownOutlined />}
      suffix="%"/>
        

    </div>
  );
}
