
Используемые технологии: React, Typescript, Redux Toolkit, axios, recharts, vite, SCSS, scss-modules, i18n, date-fns, antd, clsx
- [x] Переключение локалей(RU, EN) для интерфейса
- [x] Переключение тем(светлая. темная)
- [x] Вывести текущий номер рабочей недели
      
- [x]  отобразить последние 10 комментариев. Вывести: аватар дизайнера, имя пользователя, относительное время(минут, часов, дней назад), задача, сообщение
- [x]  отобразить топ 10 дизайнеров. Рассчитать: медиана затраченного *времени на выполнение задачи, количество выполненных задач. Отсортировать по меньшему времени, максимальное количество закрытых задач. Вывести: аватар дизайнера, имя пользователя, время, количество
- [x]   - построить график закрытых за месяц задач с распределением по **номерам рабочей недели. График состоит из 3 частей: ***прибыль, ****расходы и разница между прибылью и расходом.
- [x]   круговая диаграмма с процентным соотношением статусов всех задач

- [x]   отобразить таблицу дизайнеров. Вывести: аватар дизайнера, имя дизайнера, почта, количество задач закрытых и в процессе. Сортировка по имени дизайнера, почте. Фильтр по статусам, проектам. Пагинация


![image](https://github.com/user-attachments/assets/5e31a03f-1714-4888-961b-98ae80d660f3)



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
