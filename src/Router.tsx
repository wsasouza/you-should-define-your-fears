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
          <Route path="biography" element={<Biography />} />
          <Route path="video" element={<Video />} />
          <Route path="article" element={<Article />} />
          <Route path="task" element={<Task />}>
            <Route path="page-one" element={<PageTaskOne />} />
            <Route path="page-two" element={<PageTaskTwo />} />
            <Route path="page-three" element={<PageTaskThree />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
