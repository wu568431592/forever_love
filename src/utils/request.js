import {fetch} from "./fetch"

export const login = (phone, password) => {
  return fetch({
    url: '/api/login',
    method: 'post',
    data:{
      phone : Number(phone),
      password : password,
    },
  })
}

export const updateMemorialDay = (payload) => {
  return fetch({
    url: '/api/updateMemorialDay',
    method: 'post',
    data:{
      ...payload,
    },
  })
}

export const deleteMemorialDay = (payload) => {
  return fetch({
    url: '/api/deleteMemorialDay',
    method: 'post',
    data:{
      ...payload,
    },
  })
}

export const getMemorialDay = (payload) => {
  return fetch({
    url: '/api/getMemorialDay',
    method: 'post',
    data:{
      ...payload,
    },
  })
}

