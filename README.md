# ✈️ Airbnb

- Airbnb 조건 검색을 구현한 프로젝트 입니다.
- 기간: 2022.06.13 ~ 2022.07.01

</br>

## 👥 Team Members

| <img src="https://avatars.githubusercontent.com/u/17706346?v=4" width="100px" /> | <img src="https://avatars.githubusercontent.com/u/41741221?v=4" width="100px" /> |
| :------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
|                     [Dony(FE)](https://github.com/jindonyy)                      |                   [Yellow(FE)](https://github.com/sangbeomheo)                   |

</br>

## 🛠 Skills

<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat&logo=styled-components&logoColor=white"/>

<br>

## 🗂 Wiki

- [User Story](https://github.com/jindonyy/issue-tracker/wiki/%F0%9F%A6%84-%5BFE%5D-Backlog)

</br>

## ✨ Feature

- Canvas를 사용하여 [애니메이션 그래프](https://github.com/jindonyy/airbnb/blob/team-36/src/components/Modal/PriceModal.tsx) 구현
- 라이브러리를 사용하지 않고 [캘린더](https://github.com/jindonyy/airbnb/blob/team-36/src/components/Modal/PeriodModal.jsx) 구현
- MSW를 이용한 [데이터 조건 검색 API](https://github.com/jindonyy/airbnb/blob/team-36/src/mocks/handlers.ts) 구현

</br>

## 🖥 Demo

https://user-images.githubusercontent.com/17706346/173197853-262e08b9-a11b-4fc3-9fe2-ce1eb1314f1b.mov

</br>

## 📂 Directory

```
📂 src
├── 📂 assets
│   └── 📂 images
│       ├── icon_chevronLeft.svg
│       ├── icon_chevronRight.svg
│       ├── icon_menu.svg
│       ├── icon_search.svg
│       ├── icon_user.svg
│       └── icon_xCircle.svg
├── 📂 components
│   ├── 📂 Calendar
│   │   ├── DateUnit.jsx
│   │   ├── DateUnit.style.jsx
│   │   ├── WeekDays.jsx
│   │   ├── WeekDays.style.jsx
│   │   ├── YearMonth.jsx
│   │   ├── YearMonth.style.jsx
│   │   ├── index.jsx
│   │   └── index.style.jsx
│   ├── 📂 Header
│   │   ├── GNB.style.tsx
│   │   ├── GNB.tsx
│   │   ├── TopBar.style.tsx
│   │   ├── TopBar.tsx
│   │   ├── index.style.tsx
│   │   └── index.tsx
│   ├── 📂 Hero
│   │   ├── index.style.tsx
│   │   └── index.tsx
│   ├── 📂 Modal
│   │   ├── PeriodModal.jsx
│   │   ├── PeriodModal.style.jsx
│   │   ├── PriceModal.style.tsx
│   │   ├── PriceModal.tsx
│   │   ├── index.style.tsx
│   │   └── index.tsx
│   ├── 📂 SearchBar
│   │   ├── SearchInputButton.style.tsx
│   │   ├── SearchInputButton.tsx
│   │   ├── index.style.tsx
│   │   └── index.tsx
│   └── 📂 common
│       ├── IconButton.style.tsx
│       └── IconButton.tsx
├── 📂 constants
│   ├── color.ts
│   ├── date.ts
│   ├── font.ts
│   ├── index.ts
│   └── reservation.ts
├── 📂 contexts
│   ├── ReservationInfoProvider.tsx
│   └── SelectedModalNameProvider.tsx
├── 📂 layout
│   ├── index.style.tsx
│   └── index.tsx
├── 📂 mocks
│   ├── accommodations.js
│   ├── browser.ts
│   └── handlers.ts
├── 📂 pages
│   └── index.tsx
├── 📂 styles
│   └── GlobalStyles.tsx
├── 📂 utils
│   └── util.ts
├── App.tsx
└── index.tsx
```

<br>

## 🕹 How to use

1. 터미널에 `yarn start`를 입력한다.

```
yarn start
```

2. http://localhost:3000/ 에 접속한다.
