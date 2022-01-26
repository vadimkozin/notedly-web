import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom'
import { useQuery } from '@apollo/client'
import Layout from '../components/Layout'
import Home from './home'
import MyNotes from './my-notes'
import Favorities from './favorites'
import NotePage from '../components/NotePage'
import SignUp from './signup'
import SignIn from './signin'
import NewNote from './new-note'
import EditNote from '../components/EditNote'
import { IS_LOGGED_IN } from '../gql/query'

const Pages = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mynotes"
            element={<PrivateRoute component={MyNotes} />}
          />
          <Route
            path="/favorites"
            element={<PrivateRoute component={Favorities} />}
          />
          <Route path="/new" element={<PrivateRoute component={NewNote} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/note" element={<Outlet />}>
            <Route path=":id" element={<NotePage />} />
          </Route>

          {/* <Route path="/edit" element={<Outlet />}>
            <Route path=":id" element={<EditNote />} />
          </Route> */}

          <Route path="/edit" element={<Outlet />}>
            <Route path=":id" element={<PrivateRoute component={EditNote} />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

const PrivateRoute = ({ component: RouteComponent }) => {
  const { _, error, data } = useQuery(IS_LOGGED_IN)

  if (error) return <p>{error.message}</p>

  return data.isLoggedIn ? <RouteComponent /> : <Navigate to="/signin" />
}

export default Pages
