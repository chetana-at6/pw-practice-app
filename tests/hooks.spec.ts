import {test} from '@playwright/test'

test.beforeAll(async({page}) =>{
    await page.goto('http://localhost:4200/')
})

test.describe('suite1',()=>{
test.beforeEach(async({page}) =>{
    await page.getByText('Forms').click()
})
test('datepicker',async({page}) =>{
    await page.getByText('datepicker').click()
})
test('form layouts',async({page}) =>{
    await page.getByText('form layouts').click()
})

})


test.describe('suite2',()=>{
test.beforeEach(async({page}) =>{
    await page.getByText('Auth').click()
})
test('login',async({page}) =>{
    await page.getByText('Login').click()
})

})