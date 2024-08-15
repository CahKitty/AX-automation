import { faker } from "@faker-js/faker";
const data = {
    id_number: faker.number.int({ max: 10000 }),
    enterprise_name: faker.internet.userName(),
}
export {data}