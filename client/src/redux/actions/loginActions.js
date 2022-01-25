import { AUTH } from '../Constants/types'

import * as API from '../../api/api.js'
//QUEDO PENDIENTE CON EL SISTEMA DE AUTENTICACIÓN
//ANDO TRABAJANDO EN LA ACCIONES DE REDUX, Y EN LOS REQUEST AL API
//HAY QUE HACER AL BACKEND Y PREPARA TODO LO DE ESTE PARA EMPEZAR A VERIFICAR USUARIOS

export const loginProcess = (user) => {
    return async (dispatch) => {
        const {data} =  await API.isUserRegistered(user)

        if (data.key === 'Approved') {
            dispatch({
                type: AUTH,
                userData: user
            })
        }
    }
}