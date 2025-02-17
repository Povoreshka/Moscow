"use client"
import { Button, Popover, Space } from "antd";
import { Steps } from "antd";
import { Avatar } from "antd";
import img1 from "../../public/57cfedcafe705796f8b9c980c0cfe0e0.jpg"
import img2 from "../../public/5f1b83ec8116c191d6b9ddffdc7a1c5e.jpg"
import img3 from "../../public/fbe0aafacc762217ccdbb65acc1446d0.jpg"
import React from 'react';
import { Image } from 'antd';
import { Input, QRCode } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { Card, Col, Row, Statistic } from 'antd';

const description = 'П*здец';


export default function Home() {
  return (
    <div className="Moscow">
      <Row gutter={160}>
        <Col span={120}>
          <Card bordered={false}>
            <Statistic
              title=" Проектов задудосила"
              value={60}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={120}>
          <Card bordered={false}>
            <Statistic
              title="Проектов сломала"
              value={40}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>

      </Row>
      <div className='valorant'>
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <Image width={300} src="https://i.pinimg.com/736x/9a/c4/75/9ac475c402ba0597d0645beee91a69a6.jpg" />
          <Image
            width={700}
            src="https://i.pinimg.com/736x/60/d1/06/60d1064b3a2e4764a00c2822b31a936a.jpg"
          />
          <Image
            width={300}
            src="https://i.pinimg.com/736x/b4/30/50/b430508a1dc680ac5b26d616622035e8.jpg"
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
          <Image width={350} src="https://i.pinimg.com/736x/ce/89/aa/ce89aa04a147326f83c365b44eaa213f.jpg" />
          <Image
            width={400}
            src="https://i.pinimg.com/736x/35/3e/b7/353eb7b2b17c9f6153e20ab7c3249a79.jpg"
          />
          <Image
            width={500}
            src="https://i.pinimg.com/736x/9b/ca/95/9bca951d0acd7b6f59031ff2e8183164.jpg"
          />
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
