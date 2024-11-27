<template>
  <div class="container">
    <aside class="sidebar">
      <div class="logo">Medical School</div>
      <div class="profile">
        <p>Профиль</p>
        <p>Фамилия Имя Отчество</p>
        <p>Ур. 1</p>
        <button>Редактировать</button>
      </div>
      <nav class="menu">
        <p>Информация</p>
        <ul>
          <li>О школе</li>
          <li>Правила</li>
          <li><NuxtLink to="/forum">Форум</NuxtLink></li>
          <li>Олимпиады</li>
        </ul>
        <p>Задачник</p>
        <ul>
          <NuxtLink to="/archive">Архив задач</NuxtLink>
          <li>Состояние системы</li>
          <li>Рейтинг</li>
          <li>Курсы</li>
        </ul>
        <p>Методичка</p>
        <ul>
          <li>Новичкам</li>
          <li>Статьи</li>
          <li>Ссылки</li>
          <li>Работа в системе</li>
        </ul>
      </nav>
    </aside>
    <main class="content">
      <h1>О сайте Medical School</h1>
      <p>
        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру...
      </p>
      <div class="illustration">
        <img src="/medical-image.svg" alt="Illustration" />
      </div>
    </main>
  </div>
</template>
