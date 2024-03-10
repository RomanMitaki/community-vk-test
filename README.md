# Тестовое задание VK (community team)
## [Сайт](https://romanmitaki.github.io/community-vk-test/)
## Описание

Тестовое задание для команды сообществ (frontend-intern).
Простое react-приложение с использованием библиотеки компонентов ВКонтакте, состоящее из одной страницы, которое при открытии будет запрашивает список групп с backend (ответ метода захардкожен данными из файла groups.json).
[Здесь](https://github.com/3all/vkTest/blob/master/README.md) расположено само задание.

## Функциональность

- После получения всех групп на странице отображается их список в произвольном виде;
- реализована задержка ответа API(fetch API);
- запрос к backend учитывает возможность получения ошибки или частичное получение данных;
- предусмотрен фильтр групп (по приватности, цвету аватарки, наличию друзей);
- предусмотрена возможность отмены фильтра (приложение отобазит все группы, как при инициализации).

## Технологии

Приложение создано с использованием Create React App.
Стек:

- HTML;
- CSS;
- React.js;
- TypeScript.

## Установка

1. Клонировать репозиторий git clone git@github.com:RomanMitaki/community-vk-test.git.
2. Установить зависимости с помощью npm install.
3. Запустить проект npm run start.