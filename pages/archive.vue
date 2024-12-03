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
      <header class="tasks-header">
        <h1>Архив задач</h1>
      </header>
      <section class="tasks-list">
        <div
          v-for="(task, index) in tasks"
          :key="index"
          class="task-item"
        >
          <h2>{{ task.title }}</h2>
          <p><strong>Уровень сложности:</strong> {{ task.difficulty }}</p>
          <p><strong>Описание:</strong> {{ task.description }}</p>
          <button @click="viewTask(task.id)">Решить</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Рассчитать дозу лекарства для пациента",
          difficulty: "Средний",
          description:
            "Пациент весит 70 кг. Дозировка составляет 10 мг/кг. Рассчитайте общую дозу лекарства для однократного приема.",
        },
        {
          id: 2,
          title: "Определить диагноз по симптомам",
          difficulty: "Сложный",
          description:
            "Пациент жалуется на боль в животе, тошноту, лихорадку. Какие исследования вы порекомендуете для диагностики?",
        },
        {
          id: 3,
          title: "Анализ лабораторных данных",
          difficulty: "Легкий",
          description:
            "В анализе крови пациента обнаружено повышенное количество лейкоцитов. Что это может означать?",
        },
        {
          id: 4,
          title: "Построить график изменения температуры",
          difficulty: "Средний",
          description:
            "Температура пациента в течение суток менялась следующим образом: 37.1°C (утро), 38.2°C (день), 37.5°C (вечер). Постройте график.",
        },
        {
          id: 5,
          title: "Составить план лечения",
          difficulty: "Сложный",
          description:
            "Пациент с диагнозом 'пневмония'. Опишите последовательность действий врача, включая медикаментозное лечение и рекомендации.",
        },
      ],
    };
  },
  methods: {
    viewTask(taskId) {
      alert(`Открыта задача с ID: ${taskId}`);
    },
  },
};
</script>

<style scoped>
.forum-container {
  display: flex;
}

.sidebar {
  width: 250px;
  padding: 20px;
  background-color: #f7f7f7;
}

.menu p {
  font-weight: bold;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu li {
  margin: 10px 0;
}

.content {
  flex: 1;
  padding: 20px;
}

.tasks-header {
  margin-bottom: 20px;
}

.task-item {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
}

.task-item h2 {
  margin: 0 0 10px;
}

.task-item p {
  margin: 5px 0;
}

.task-item button {
  background-color: #00ff37;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.task-item button:hover {
  background-color: #00b31e;
}
</style>