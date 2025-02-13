import RootLayout from '@/app/layout';
import { CallbackPage, HomePage, RankingPage, UserIdPage } from '@/app/router';
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
        <Route
          path="/auth/callback"
          element={<LoadPage children={<CallbackPage />} />}
        />
        <Route
          path="/user/:id"
          element={<LoadPage children={<UserIdPage />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
