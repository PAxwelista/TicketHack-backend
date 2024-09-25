const request = require("supertest");
const app = require("../app")


describe("POST /panier" , ()=>{
    it("should return true and post" ,async ()=>{
        const bodyToSend = {
            departure : "Luxembourg",
            arrival : "Marseille",
            date : "2024-09-30Z",
            price : 144
        };
        const res = await request(app).post("/panier").send(bodyToSend);
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(true);
    })
})