import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Video } from './pages/Video'
import { Article } from './pages/Article'
import { Task } from './pages/Task'
import { Biography } from './pages/Biography'
import { PageOne } from './pages/Task/components/PageOne'
import { PageTwo } from './pages/Task/components/PageTwo'
import { PageThree } from './pages/Task/components/PageThree'

export function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/article" element={<Article />} />
          <Route path="/task" element={<Task />}>
            <Route path="page-one" element={<PageOne />} />
            <Route path="page-two" element={<PageTwo />} />
            <Route path="page-three" element={<PageThree />} />
          </Route>
          <Route path="/biography" element={<Biography />} />
        </Route>
      </Routes>
    </div>
  )
}
