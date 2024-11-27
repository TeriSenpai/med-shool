<template>
    <div class="forum-container">
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
            <li>Форум</li>
            <li>Олимпиады</li>
          </ul>
          <p>Задачник</p>
          <ul>
            <li>Архив задач</li>
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
        <header class="forum-header">
          <h1>Форум</h1>
          <div class="forum-controls">
            <input type="text" v-model="searchQuery" placeholder="Поиск..." />
            <select v-model="selectedCategory">
              <option value="all">Все категории</option>
              <option value="science">Наука</option>
              <option value="technology">Технологии</option>
              <option value="medicine">Медицина</option>
            </select>
            <select v-model="sortOption">
              <option value="date">По дате</option>
              <option value="popularity">По популярности</option>
            </select>
          </div>
        </header>
        <section class="forum-topics">
          <div
            v-for="(topic, index) in filteredTopics"
            :key="index"
            class="forum-topic"
          >
            <h2>{{ topic.title }}</h2>
            <p>{{ topic.author }}</p>
            <p>{{ topic.date }}</p>
            <p>{{ topic.description }}</p>
            <a href="#">Подробнее</a>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: "",
        selectedCategory: "all",
        sortOption: "date",
        topics: [
          {
            title: "Тема, очень большое длинное название какой-то темы",
            author: "Фамилия И. О.",
            date: "18 января 13:15",
            category: "science",
            description:
              "По своей сути рыбатекст является альтернативой традиционному lorem ipsum...",
          },
        ],
      };
    },

    data() {
      return {
        searchQuery: "",
        selectedCategory: "all",
        sortOption: "date",
        topics: [
          {
            title: "Тема, очень большое длинное название какой-то темы",
            author: "Фамилия И. О.",
            date: "18 января 13:15",
            category: "science",
            description:
              "По своей сути рыбатекст является альтернативой традиционному lorem ipsum...",
          },
        ],
      };
    },

    
    computed: {
      filteredTopics() {
        let filtered = this.topics;
  
        if (this.selectedCategory !== "all") {
          filtered = filtered.filter(
            (topic) => topic.category === this.selectedCategory
          );
        }
  
        if (this.searchQuery) {
          filtered = filtered.filter((topic) =>
            topic.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
  
        if (this.sortOption === "popularity") {
          filtered.sort((a, b) => b.title.length - a.title.length);
        }
  
        return filtered;
      },
    },
  };
  </script>
  