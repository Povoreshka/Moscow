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



      <Image.PreviewGroup
        items={[
          'https://minio.nplus1.ru/app-images/225207/conversions/63018e19a334e_cover-conversion-webp.webp',
          'https://s3.russpass.ru/rp-mag-public-prod/images/shutterstoc.format-webp.max-16383x16383.webpquality-100_zBazS62.webp',
          'https://путешествуем.рф/media/images/5.Moskva.Nikol.format-webp.max-2000x2000.jpegquality-80.webp',
        ]}
      >
        <Image
          width={1000}
          src="https://minio.nplus1.ru/app-images/225207/conversions/63018e19a334e_cover-conversion-webp.webp"
        />
      </Image.PreviewGroup>
    </div>
  );
}
