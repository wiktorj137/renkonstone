import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { HomePage, ServicesPage, ServiceDetailsPage, ProjectsPage, ContactPage, AboutPage } from '@/pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="uslugi" element={<ServicesPage />} />
          <Route path="uslugi/:slug" element={<ServiceDetailsPage />} />
          <Route path="realizacje" element={<ProjectsPage />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="o-nas" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
