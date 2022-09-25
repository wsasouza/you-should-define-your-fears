import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Video } from './pages/Video'
import { Article } from './pages/Article'
import { Task } from './pages/Task'
import { Biography } from './pages/Biography'
import { PageTaskOne } from './pages/PageTaskOne'
import { PageTaskTwo } from './pages/PageTaskTwo'
import { PageTaskThree } from './pages/PageTaskThree'

export function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            key="biography"
            path="biography"
            element={<Biography key="biography" />}
          />
          <Route key="video" path="video" element={<Video key="video" />} />
          <Route
            key="article"
            path="article"
            element={<Article key="article" />}
          />
          <Route key="task" path="task" element={<Task key="task" />}>
            <Route
              key="page-one"
              path="page-one"
              element={<PageTaskOne key="page-one" />}
            />
            <Route
              key="page-two"
              path="page-two"
              element={<PageTaskTwo key="page-two" />}
            />
            <Route
              key="page-three"
              path="page-three"
              element={<PageTaskThree key="page-two" />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
