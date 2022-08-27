//aula typescript

type User = {
  name: string;
  email: string;
  address: {
    city: string;
    state?: string;
  }
}

function showWelcomeMessage (user: User){
    return `Welcome ${user.name} , your email is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;
}

showWelcomeMessage({name: 'Douglas', email: 'douglas@gmail.com', address: {city: 'San Francisco', state: 'CA'}})