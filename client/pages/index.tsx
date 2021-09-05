import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Index = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Добро пожалость</h1>
          <h3>Сервис лучших треков</h3>
        </div>
      </MainLayout>
      <style jsx>
        {`
          .center {
            display: flex;
            margin-top: 150px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default Index;
