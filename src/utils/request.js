import {fetch} from "./fetch"

export const login = (phone, password) => {
  console.log(1)
  let phoneArray = phone.split(' ')
  let mephone =''
  phoneArray.forEach(function (item){
    mephone+=item
  })
  return fetch({
    url: '/api/login',
    method: 'post',
    data:{
      phone : Number(mephone),
      password : password,
    },
  })
}

