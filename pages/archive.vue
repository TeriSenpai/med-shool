<template>
  <div class="archive-container">
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
          <li @click="$router.push('/')">О школе</li>
          <li>Правила</li>
          <li>Форум</li>
          <li>Олимпиады</li>
        </ul>
        <p>Задачник</p>
        <ul>
          <li @click="$router.push('/archive')">Архив задач</li>
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
      <v-container>
        <h1 class="text-h4 my-4">Архив задач</h1>
        <p>
          По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некоторых людей недоумение при попытках прочитать рыбу текст.
        </p>

        <v-data-table
          :headers="headers"
          :items="tasks"
          :items-per-page="10"
          class="elevation-1 archive-table"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Архив задач</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                label="Поиск"
                single-line
                hide-details
                prepend-icon="mdi-magnify"
                class="search-bar"
              ></v-text-field>
            </v-toolbar>
          </template>
        </v-data-table>
      </v-container>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Решено", value: "solved" },
        { text: "ID", value: "id" },
        { text: "Название задачи", value: "taskName" },
        { text: "Тема", value: "topic" },
        { text: "Есть?", value: "available" },
        { text: "Сложность", value: "difficulty" },
        { text: "Решаемость", value: "solvability" },
        { text: "Принято", value: "accepted" },
      ],
      tasks: [
        { solved: "Да", id: 1, taskName: "Какое-то длинное название задачи", topic: "Какая-то длинная тема задачи", available: "Есть", difficulty: "1%", solvability: "99%", accepted: 1979907 },
        { solved: "Нет", id: 2, taskName: "Название задачи", topic: "Тема задачи", available: "Нет", difficulty: "70%", solvability: "20%", accepted: 1476 },
        { solved: "Да", id: 3, taskName: "Другое название задачи", topic: "Другая тема задачи", available: "Есть", difficulty: "1%", solvability: "99%", accepted: 1979907 },
        { solved: "Да", id: 54, taskName: "Еще одна задача", topic: "Дополнительная тема", available: "Есть", difficulty: "10%", solvability: "85%", accepted: 305670 },
        { solved: "Нет", id: 66, taskName: "Пример задачи", topic: "Еще один пример", available: "Нет", difficulty: "55%", solvability: "35%", accepted: 789 },
        { solved: "Да", id: 76, taskName: "Сложная задача", topic: "Сложная тема", available: "Есть", difficulty: "15%", solvability: "92%", accepted: 100090 },
        { solved: "Нет", id: 98, taskName: "Легкая задача", topic: "Легкая тема", available: "Нет", difficulty: "80%", solvability: "25%", accepted: 1560 },
        { solved: "Да", id: 141, taskName: "Длинное название задачи", topic: "Сложная задача", available: "Есть", difficulty: "2%", solvability: "95%", accepted: 190000 },
        { solved: "Нет", id: 162, taskName: "Еще задача", topic: "Тематика задачи", available: "Нет", difficulty: "75%", solvability: "15%", accepted: 890 },
        { solved: "Да", id: 39, taskName: "Короткое название", topic: "Легкая тема", available: "Есть", difficulty: "10%", solvability: "89%", accepted: 50000 },
        ...Array(90).fill().map((_, index) => ({
          solved: index % 2 === 0 ? "Да" : "Нет",
          id: index + 200,
          taskName: `Задача ${index + 1}`,
          topic: `Тема ${index + 1}`,
          available: index % 3 === 0 ? "Есть" : "Нет",
          difficulty: `${(index % 10) * 10}%`,
          solvability: `${100 - (index % 20)}%`,
          accepted: Math.floor(Math.random() * 10000) + 1000,
        })),
      ],
    };
  },
};
</script>

<style src="@/assets/styles/archive.css"></style>
