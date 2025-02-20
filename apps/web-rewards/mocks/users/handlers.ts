import { HttpResponse, http } from 'msw';
import { ranking, users } from '../data/users.json';

export const userHandlers = [
  http.get('http://localhost:8080/api/ranking', async () => {
    return HttpResponse.json(
      {
        ranking,
      },
      { status: 200 },
    );
  }),
  http.get('http://localhost:8080/api/users/:id', async ({ params }) => {
    const id = params.id as string;

    if (!id)
      return HttpResponse.json({ message: 'User not found' }, { status: 404 });

    const user = users[id as keyof typeof users];

    if (!user)
      return HttpResponse.json({ message: 'User not found' }, { status: 404 });

    return HttpResponse.json(
      {
        user,
      },
      { status: 200 },
    );
  }),
];
