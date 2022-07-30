import { logoutRequest } from '@/modules/slices'
import React, { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'

type Props = {
    props : (e :React.FormEvent<HTMLFormElement>) => void;
  }

export const Logout:FC<Props> = (onSubmit:Props) => {

  return (
      <form onSubmit={()=>onSubmit}>
          <p>로그아웃하시겠습니까?</p>
        <button >Logout</button>
    </form>
  )
}