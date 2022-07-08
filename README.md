Команды:

### Запуск приложения:
> npm run start

### Описание запросов:

Добавление нового пользователя (проверяется на уникальный логин):
> curl --location --request POST 'http://localhost:3000/user' \
--header 'Content-Type: application/json' \
--data-raw '{
"login": "Gue5551",
"password": "123",
"name": "Вова",
"lastName": "Петров",
"age": 32,
"city": "Москва",
"description": "радиолюбитель"
}'

Просмотр всех пользователей:
> curl --location --request GET 'http://localhost:3000/user'

Создание нового твита:
> curl --location --request POST 'http://localhost:3000/tweet?userId=1' \
--header 'Content-Type: application/json' \
--data-raw '{
"title": "Новый твит1",
"text": "Текст нового твита"
}'

Авторизация пользователя:
> curl --location --request POST 'http://localhost:3000/auth' \
--header 'Content-Type: application/json' \
--data-raw '{"login": "Ivan", "password": "fghmfhm"}'