import { Navigate } from 'react-router-dom'

type Props = {
  auth: boolean
  children: JSX.Element
}

export const RequireAuth = ({ auth, children }: Props) => {
  if (!auth) {
    return <Navigate to="/login" />
  }

  return children
}
