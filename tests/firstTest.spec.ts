import {test} from '@playwright/test'

test('The first test',async({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()

})


test('navigate to datepicker page',async({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('datepicker').click()

})


// Hooks- beforeEach
 test.beforeEach(async({page}) =>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
 }) 

test('navigate to datepicker page 1',async({page}) => {
   
    await page.getByText('datepicker').click()

})

 //describes group of tests
test.describe( 'test suite 1' , () =>{
    
    test('The one test',() => {

})
test('The two test',() => {

})
test('The three test',() => {

})

})

