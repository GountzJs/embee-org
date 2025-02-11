import RootLayout from '@/app/layout';
import { HomePage, RankingPage } from '@/app/router';
import { LoadPage } from '@/shared/components/load-page/load-page';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<LoadPage children={<HomePage />} />} />
        <Route
          path="/ranking"
          element={<LoadPage children={<RankingPage />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
