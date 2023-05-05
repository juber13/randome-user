const URL = 'https://randomuser.me/api/';
const getData = async() => {
    const data = await fetch(URL);
    const res = await data.json();
    // console.log(res.results[0]);
    const persone = res.results[0];
    const {phone , email} = persone;
    const {first , last} = persone.name; 
    const {large:img} = persone.picture;
    const {dob:{age}} = persone;
    const {street:{number , name}} = persone.location;
    const {login : {password}} = persone;
    return{ password , phone,email,name : `${first} ${last}`,img , age , street :`${number} ${name}`}
}


export default getData;