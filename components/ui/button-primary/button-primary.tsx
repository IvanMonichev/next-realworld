import type { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from 'react'

type ButtonPrimaryType = PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>

const ButtonPrimary: FC<ButtonPrimaryType> = ({ children, ...props }) => {

  return (
    <button className='btn btn-lg btn-primary pull-xs-right' {...props}>{children}</button>
  )
}

export default ButtonPrimary
