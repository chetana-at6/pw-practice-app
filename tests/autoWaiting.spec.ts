import { test, expect } from '@playwright/test'
import { timeout } from 'rxjs-compat/operator/timeout'

test.beforeEach(async({page}) =>{
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
})

test ('auto waiting', async({page}) =>{
    const successButton = page.locator('.bg-success')
    await successButton.click() //1

//      const text = await successButton.textContent()
//      expect(text).toEqual('Data loaded with AJAX get request.') //2

//    const text = await successButton.allTextContents()
//    await successButton.waitFor({state:"attached"})
//    expect(text).toContain('Data loaded with AJAX get request.') //3

    await expect(successButton).toHaveText('Data loaded with AJAX get request.',{timeout:20000}) //4
 })


test ('alternative wait', async({page}) =>{
    const successButton = page.locator('.bg-success')

    //__wait for element
   // await page.waitForSelector('.bg-success')

    //__wait for response
    //await page.waitForResponse('http://uitestingplayground.com/ajaxdata')


    //__ wait for network calls to be completed ('NOT RECOMMENDED')
    await page.waitForLoadState('networkidle')
const text = await successButton.allTextContents()
expect(text).toContain('Data loaded with AJAX get request.')

})

test('timeouts', async({page}) =>{
//test.setTimeout(16000)
test.slow()
const successButton = page.locator('.bg-success')
await successButton.click()
})