import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Video } from './pages/Video'
import { Article } from './pages/Article'
import { Task } from './pages/Task'
import { Biography } from './pages/Biography'

export function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/article" element={<Article />} />
          <Route path="/task" element={<Task />} />
          <Route path="/biography" element={<Biography />} />
        </Route>
      </Routes>
    </div>
  )
}
