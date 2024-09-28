import { redirect } from '@sveltejs/kit';

export function load({ url }) {
  const workID = url.searchParams.get('work');

  if (!workID) {
    redirect(307, '/');
  }

  return { workID };
}
