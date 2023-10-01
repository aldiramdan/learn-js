const data = 
        {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                hobby: [],
                address: 
                        {
                        street: "Kulas Light",
                        suite: "Apt. 556",
                        city: "Gwenborough",
                        zipcode: "92998-3874",
                        },
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org",
        }
const dataNew =
        {
                id: 2,
                name: "Aldi Ramdan",
                email: "aldi@gmail.com",
                hobby: ['Music']
                
        }
// join data object
const joinData = {...data, ...dataNew}
console.log(joinData);

// rename value object
const newData = {...data, name: 'Aldi Ramdan',username: 'aldi', email: 'aldi@gmail.com', hobby: ['Music']}     
console.log(newData);

// mengambil data address
const {street, city} = data.address
console.log(street +'\n'+ city);