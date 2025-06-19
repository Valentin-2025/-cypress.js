import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json";
import * as result_page from "../locators/result_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json";

describe('Проверка авторизации', function () {

      beforeEach('Начало теста', function () {  // ВСЁ ЧТО ПОСЛЕ хук beforeEach - БУДЕТ ВЫПОЛНЯТЬСЯ АВТОМАТИЧЕСКИ ПЕРЕД КАЖДЫМ АВТОТЕСТОМ
         cy.visit('/'); // ЗАШЛИ НА САЙТ
         cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)'); // ПРОВЕРЯЮ ЦВЕТ КНОПКИ "ЗАБЫЛИ ПАРОЛЬ?"
         });  
     
      afterEach('Конец теста', function () {    // ВСЁ ЧТО ПОСЛЕ хук afterEach - БУДЕТ ВЫПОЛНЯТЬСЯ АВТОМАТИЧЕСКИ ПОСЛЕ КАЖДОГО АВТОТЕСТА
         cy.get(result_page.close).should('be.visible'); //ЕСТЬ КРЕСТИК И ОН ВИДЕН ДЛЯ ПОЛЬЗОВАТЕЛЯ
         });
   
it('Правильный логин и правильный пароль', function () {
         cy.get(main_page.email).type(data.login); //ВВЕЛИ ПРАВИЛЬНЫЙ ЛОГИН
         cy.get(main_page.password).type(data.password); //ВВЕЛИ ПРАВИЛЬНЫЙ ПАРОЛЬ
         cy.get(main_page.login_button).click(); //НАШЛИ КНОПКУ "ВОЙТИ" И НАЖАЛИ НА НЕЁ
         
         cy.get(result_page.title).contains('Авторизация прошла успешно'); //ПРОВЕРЯЮ, ЧТО ПОСЛЕ АВТОРИЗАЦИИ ВИЖУ ТЕКСТ
         cy.get(result_page.title).should('be.visible'); //ТЕКСТ "АВТОРИЗАЦИЯ ПРОШЛА УСПЕШНО" ВИДЕН ПОЛЬЗОВАТЕЛЮ
         })

it('Проверка логики восстановления пароля', function () {
         cy.get(main_page.fogot_pass_btn).click(); //НАЖИМАЮ КНОПКУ "ЗАБЫЛИ ПАРОЛЬ?"
         cy.get(recovery_password_page.email).type(data.login); //ВВЕЛИ ПРАВИЛЬУЮ ПОЧТУ ДЛЯ ВОССТАНОВЛЕНИЯ
         cy.get(recovery_password_page.send_button).click(); //НАЖАЛ КНОПКУ "ОТПРАВИТЬ КОД"
                
         cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); //ПРОВЕРЯЮ, НА СОВПАДЕНИЕ ТЕКСТ
         cy.get(result_page.title).should('be.visible'); //ТЕКСТ "Успешно отправили пароль на e-mail" ВИДЕН ПОЛЬЗОВАТЕЛЮ
         })

it('Правильный логин и неправильный пароль', function () {
         cy.get(main_page.email).type(data.login); //ВВЕЛИ ПРАВИЛЬНЫЙ ЛОГИН
         cy.get(main_page.password).type('iLoveqastudio7'); //ВВЕЛИ НЕПРАВИЛЬНЫЙ ПАРОЛЬ
         cy.get(main_page.login_button).click(); //НАШЛИ КНОПКУ "ВОЙТИ" И НАЖАЛИ НА НЕЁ
         
         cy.get(result_page.title).contains('Такого логина или пароля нет'); //ПРОВЕРЯЮ, ЧТО ПОСЛЕ АВТОРИЗАЦИИ ВИЖУ ТЕКСТ
         cy.get(result_page.title).should('be.visible'); //ТЕКСТ "Такого логина или пароля нет" ВИДЕН ПОЛЬЗОВАТЕЛЮ
         })

it('Неправильный логин и правильный пароль', function () {
         cy.get(main_page.email).type('german@dolnikov2.ru'); //ВВЕЛИ НЕПРАВИЛЬНЫЙ ЛОГИН
         cy.get(main_page.password).type(data.password); //ВВЕЛИ ПРАВИЛЬНЫЙ ПАРОЛЬ
         cy.get(main_page.login_button).click(); //НАШЛИ КНОПКУ "ВОЙТИ" И НАЖАЛИ НА НЕЁ
         
         cy.get(result_page.title).contains('Такого логина или пароля нет'); //ПРОВЕРЯЮ, ЧТО ПОСЛЕ АВТОРИЗАЦИИ ВИЖУ ТЕКСТ
         cy.get(result_page.title).should('be.visible'); //ТЕКСТ "Такого логина или пароля нет" ВИДЕН ПОЛЬЗОВАТЕЛЮ
         })

it('Негативный кейс валидации, без @', function () {
         cy.get(main_page.email).type('germandolnikov.ru'); //ВВЕЛИ ПРАВИЛЬНЫЙ ЛОГИН БЕЗ @
         cy.get(main_page.password).type(data.password); //ВВЕЛИ ПРАВИЛЬНЫЙ ПАРОЛЬ
         cy.get(main_page.login_button).click(); //НАШЛИ КНОПКУ "ВОЙТИ" И НАЖАЛИ НА НЕЁ
         
         cy.get(result_page.title).contains('Нужно исправить проблему валидации'); //ПРОВЕРЯЮ, ЧТО ПОСЛЕ АВТОРИЗАЦИИ ВИЖУ ТЕКСТ
         cy.get(result_page.title).should('be.visible'); //ТЕКСТ "Нужно исправить проблему валидации" ВИДЕН ПОЛЬЗОВАТЕЛЮ
         })

it('Приведение к строчным буквам в логине', function () {
         cy.get(main_page.email).type('GerMan@Dolnikov.ru'); //ВВЕЛИ ПРАВИЛЬНЫЙ ЛОГИН С ЗАГЛАВНЫМИ БУКВАМИ
         cy.get(main_page.password).type(data.password); //ВВЕЛИ ПРАВИЛЬНЫЙ ПАРОЛЬ
         cy.get(main_page.login_button).click(); //НАШЛИ КНОПКУ "ВОЙТИ" И НАЖАЛИ НА НЕЁ
         
         cy.get(result_page.title).contains('Авторизация прошла успешно'); //ПРОВЕРЯЮ, ЧТО ПОСЛЕ АВТОРИЗАЦИИ ВИЖУ ТЕКСТ
         cy.get(result_page.title).should('be.visible'); //ТЕКСТ "АВТОРИЗАЦИЯ ПРОШЛА УСПЕШНО" ВИДЕН ПОЛЬЗОВАТЕЛЮ
         })    


})

