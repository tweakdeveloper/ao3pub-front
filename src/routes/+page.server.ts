import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const workURL = data.get('workURL');

    if (!workURL || typeof workURL != 'string') {
      return fail(400, { workURL, missing: true });
    }

    const workMatcher = /(?<=^https:\/\/archiveofourown\.org\/works\/)\d+$/;

    const workIDs = workMatcher.exec(workURL);

    if (!workIDs) {
      return fail(400, { workURL, invalid: true });
    }

    redirect(303, `/editor?work=${workIDs[0]}`);
  },
};
