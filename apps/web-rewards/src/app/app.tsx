import RootLayout from '@/app/layout';
import { HomePage, RankingPage, UserIdPage } from '@/app/router';
import { LoadPage } from '@/shared/components/load-page/load-page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<LoadPage children={<HomePage />} />} />
          <Route
            path="/ranking"
            element={<LoadPage children={<RankingPage />} />}
          />
          <Route
            path="/user/:id"
            element={<LoadPage children={<UserIdPage />} />}
          />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
