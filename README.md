# -cypress.js
Автотесты на клиентскую часть  на Cypress Javascript
<h2>UI Автотесты на фреймворке Cypress</h2>

> **Статус проекта:**
> Публичный проект: https://login.qa.studio/
> 
> 🟢 Поддерживается (активный) 

## Описание проекта и задачи
Автоматизировать часть проверок регресса с помощью Cypress

## Тест-кейсы, которые автоматизировали
* Авторизация с верным паролем и верным логином
* Авторизация c верным логином и неверным паролем
* Проверка работы валиадации на наличие @ в логине
* Проверка флоу восстановления пароля

## Детали реализации

1. baseUrl вынесен в переменные конфига
![image](https://raw.githubusercontent.com/Valentin-2025/-cypress.js/refs/heads/main/BaseUrl.png)

2. Применение хуков beforeEach и afterEach
![image](https://raw.githubusercontent.com/Valentin-2025/-cypress.js/refs/heads/main/new_cypress-main/Before%20After.png)

3. Переменные данные для авторизации вынесены в отдельный файл
![image](https://raw.githubusercontent.com/Valentin-2025/-cypress.js/refs/heads/main/new_cypress-main/Avtoriz.png)

4. Каждая страница описана в формате объекта с локаторами
![image](https://raw.githubusercontent.com/Valentin-2025/-cypress.js/refs/heads/main/new_cypress-main/Lokator.png)

## Локальный запуск тестов (из терминала)
1. Скачать проект
2. Перейти в терминале в директорию проекта
2. Выполнить команду:
```
npx cypress run --spec cypress/e2e/lesson_locators.cy.js --browser chrome
```
Ожидаемый результат: получим отчёт о прохождении тестов.
![image](https://raw.githubusercontent.com/Valentin-2025/-cypress.js/refs/heads/main/Cypress_cli.png)


## Локальный запуск через Cypress UI
1. Скачать проект и открыть в терминале.
2. Перейти в директорию проекта.
3. В терминале в папке с проектом запустить npm `install --save-dev cypress@12.7.0`
4. В терминале в папке с проектом запустить npm `npm i`
5. В терминале в папке с проектом запустить npm `npx cypress open`
6. Выбрать в Cypress UI E2E тестирование и браузер Google Chrome
7. Выбрать спеку lesson_locators

Ожидаемый результат: получим отчёт о прохождении тестов.
![image](https://raw.githubusercontent.com/Valentin-2025/-cypress.js/refs/heads/main/new_cypress-main/cy.png)


Валентин Ретюнский 
[![Email](https://img.shields.io/badge/Email-3b5998?style=flat-square&logo=Mail.Ru&logoColor=white)](mailto:retvaliv72@yandex.ru)
[![Telegram Badge](https://img.shields.io/badge/-Telegram-0088cc?style=flat-square&logo=Telegram&logoColor=white)](https://t.me/ValentinRet)
