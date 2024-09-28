import { redirect } from '@sveltejs/kit';

export async function load({ url }) {
  const workID = url.searchParams.get('work');

  if (!workID) {
    redirect(307, '/');
  }

  const workMetadata = await fetch(`/api/work/${workID}/metadata`);

  return { workID, metadata: workMetadata };
}
