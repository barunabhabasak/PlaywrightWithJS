import { test, expect } from '@playwright/test'

var userId;

test('Get', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    await expect(response.status()).toBe(200);

})

test('Post', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users',
        {
            data: {
                "name": "Barunabha",
                "job": "intern"
            },
            headers: {
                "Accept" : "application/json"
            }
        }
    );
    console.log(await response.json());
    await expect(response.status()).toBe(201);

    var res = await response.json();
    userId = res.id;

})


test('Put', async({request}) =>{

    const response = await request.put('https://reqres.in/api/users/'+userId,
        {
            data: {
                "name": "Barunabha Basak",
                "job": "Intern"
            },
            headers: {
                "Accept" : "application/json"
            }
        }

    );
    console.log(await response.json());
    await expect(response.status()).toBe(200);
    
})


test('Delete', async ({ request }) => {

    const response = await request.delete('https://reqres.in/api/users/'+userId);
    await expect(response.status()).toBe(204);

})