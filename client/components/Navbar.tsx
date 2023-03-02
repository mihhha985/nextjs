import React from 'react';
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter();
  const menuItems = [
    {text: 'Главная', href: '/'},
    {text: 'Список трэков', href: '/tracks'},
    {text: 'Список альбомов', href: '/albums'},
  ]

  return(
    <ul>
      {menuItems.map((item, index) => 
        <li key={index} onClick={() => router.push(item.href)}>{item.text}</li>
      )}        
    </ul>           
  );
}