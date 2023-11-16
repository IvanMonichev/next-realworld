import type { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from 'react'
import cn from 'classnames'

type ButtonPrimaryType = PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>

const ButtonPrimary: FC<ButtonPrimaryType> = ({ children, className, ...props }) => {

  return (
    <button className={cn('btn btn-lg btn-primary pull-xs-right', className)} {...props}>{children}</button>
  )
}

export default ButtonPrimary
