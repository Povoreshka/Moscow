"use client"
import { Button, Form, Popover, Space, Steps, Avatar, Input, QRCode } from "antd";
import Image from "next/image";
import React, { useState, useEffect, FormEvent } from 'react';
import img1 from "../../public/57cfedcafe705796f8b9c980c0cfe0e0.jpg";
import img2 from "../../public/5f1b83ec8116c191d6b9ddffdc7a1c5e.jpg";
import img3 from "../../public/fbe0aafacc762217ccdbb65acc1446d0.jpg";

const description = 'П*здец';

interface Skill {
  id: string;
  title: string;
  description?: string;
  iconUrl?: string;
}

export default function Home() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [iconUrl, setIconUrl] = useState('');

  useEffect(() => {
    async function fetchSkills() {
      const res = await fetch('/api/skills');
      const data = await res.json();
      setSkills(data);
    }
    fetchSkills();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch('/api/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        iconUrl,
      }),
    });

    if (res.ok) {
      const newSkill = await res.json();
      setSkills((prev) => [...prev, newSkill]);
      setTitle('');
      setDescription('');
      setIconUrl('');
    } else {
      console.error('Ошибка при добавлении навыка');
    }
  }

  const content = (
    <div className="PopoverContent">
      <h1>Вариант происшествия</h1>
      {skills.length === 0 ? (
        <p>Нет добавленных происшествий</p>
      ) : (
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>
              <h3>{skill.title}</h3>
              {skill.description && <p>{skill.description}</p>}
              {skill.iconUrl && (
                <img src={skill.iconUrl} alt={skill.title} width="50" height="50" />
              )}
            </li>
          ))}
        </ul>
      )}
      <h2>Варианты того что случиться пока мы будем в Moscow...</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Вариант происшествия'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder='Описание'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder='URL memes'
          value={iconUrl}
          onChange={(e) => setIconUrl(e.target.value)}
        />
        <button type='submit'>Добавить вариант</button>
      </form>
    </div>
  );

  return (
    <div className="Moscow">
      <p>Меня зовут Маша, а еще есть Соня и Поварешка и мы летим в Moscow</p>
      <Space className="Space">
        <Space direction="vertical" align="center">
          <Popover content={<QRCode value="https://t.me/Sonechka_ssss" bordered={false} />}>
            <Avatar size={150} icon={<Image src={img1} alt="Sonya" />} />
          </Popover>
          <form action="sona" target="_blank">
            <button>Соня</button>
          </form>
        </Space>
        <Space direction="vertical" align="center">
          <Popover content={<QRCode value="https://t.me/Sovaaaaq" bordered={false} />}>
            <Avatar size={150} icon={<Image src={img2} alt="Masha" />} />
          </Popover>
          <form action="masha" target="_blank">
            <button>Маша</button>
          </form>
        </Space>
        <Space direction="vertical" align="center">
          <Popover content={<QRCode value="https://t.me/povoreshka1" bordered={false} />}>
            <Avatar size={150} icon={<Image src={img3} alt="Katya" />} />
          </Popover>
          <form action="katy" target="_blank">
            <button>Катя</button>
          </form>
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
          },
          {
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
        <Popover content={content} title="Варианты происшествий" trigger="click">
          <Button type="primary">Полетели</Button>
        </Popover>
      </div>
    </div>
  );
}
