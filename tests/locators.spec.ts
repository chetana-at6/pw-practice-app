import {test} from '@playwright/test'
import { first } from 'rxjs/operators'

test.beforeEach (async({page}) =>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()

})

test('locator syntax rule',async({page}) =>{

    //By tag name
    await page.locator('input').first().click()

    // By ID
    page.locator('#inputEmail1')

    //By class value
    page.locator('.size-medium')
    
    //By attribute
    page.locator('[placeholder="Email"]')

    // By class value (full)
    page.locator('[class ="input-full-width size-medium status-basic shape-rectangle nb-transition"]')
    
    // Combine different selector
    page.locator('input[placeholder="Email"]') //no space in between

    // By XPath
    page.locator('//*[@id="inputEmail1"]')
})

test('user facing locator', async({page}) =>{
    await page.getByRole('textbox' ,{name: "Email"}).first().click()
    await page.getByRole('button',{name:"sign in"}).first().click()

    await page.getByLabel('Email').first().click()

    await page.getByPlaceholder('Jane Doe').click()

    await page.getByText('Using the Grid').click()

    await page.getByTitle('IoT Dashboard').click()

    await page.getByTestId('signIn').click()
})
