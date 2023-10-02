import {Login} from "../src/tasks/Login";
import { test, expect } from "@playwright/test";
import { Anotations } from "../src/utils/Anotations";
import { LoginQuestion } from "../src/questions/LoginQuestions";

test.describe('@Feature: El usuario hace login en la pagina', async () =>{

    let login;
    let loginQuestion;
    
    test.beforeEach(async ({page}) =>{
        login = new Login(page);
        loginQuestion = new LoginQuestion(page);
        await page.goto("/");
        await page.waitForTimeout(3000);
    })
    test.describe('Feature: usuario ingresa a su cuenta', async() =>{

        test('Scenario: el usuario realiza el login en la pagina', async()=>{
            Anotations.given('usuario ingresa su correo y contraseña');
            await login.setDataForm("pruebaplaywright1@yopmail.com", "admin123");
            Anotations.when('usuario ingresa a su cuenta')
            await login.clickToLogin();
            Anotations.then('usuario estara dentro del panel principal de su cuenta')
            expect(loginQuestion.wishListIsPresent())
        })
    
    })
})


