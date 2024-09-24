const request = require("supertest");
const app = require("../app")

describe("POST /trips", ()=>{
    it("should return trips" ,async ()=>{
        const bodyToSend = {
            departure : "Paris",
            arrival : "Marseille",
            date : new Date("2024-09-30Z")
        };
        const res = await request(app).post("/trips").send(bodyToSend);

        expect(res.statusCode).toBe(200);
        expect(res.body.trips).toEqual([
            {
              "_id": "66f278e0807adc0c03d68947",
              "departure": "Paris",
              "arrival": "Marseille",
              "date": "2024-09-30T04:28:40.780Z",
              "price": 135
            },
            {
              "_id": "66f278e0807adc0c03d6895c",
              "departure": "Paris",
              "arrival": "Marseille",
              "date": "2024-09-30T07:52:18.616Z",
              "price": 121
            },
            {
              "_id": "66f278e0807adc0c03d68993",
              "departure": "Paris",
              "arrival": "Marseille",
              "date": "2024-09-30T17:17:06.007Z",
              "price": 135
            },
            {
              "_id": "66f278e0807adc0c03d689b1",
              "departure": "Paris",
              "arrival": "Marseille",
              "date": "2024-09-30T21:36:47.854Z",
              "price": 82
            }
          ]);
    });
    it("should return result : false" ,async ()=>{
        const res = await request(app).post("/trips");
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(false);
    });
})

describe("GET /trips/:id" , ()=>{
  it("should return trip" , async ()=>{
    const trip = {
      "_id": "66f278e0807adc0c03d6871b",
      "departure": "Marseille",
      "arrival": "Paris",
      "date": "2024-09-26T05:22:00.069Z",
      "price": 148
    };
    const res = await request(app).get("/trips/66f278e0807adc0c03d6871b");
    expect (res.statusCode).toBe(200)
    expect (res.body.trip).toEqual(trip)
  })
});