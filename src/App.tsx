import { SEO } from '@/components/SEO';
import { MainLayout } from '@/layouts/MainLayout';
import { Home } from '@/pages/Home';

export default function App() {
  return (
    <>
      <SEO />
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
}
