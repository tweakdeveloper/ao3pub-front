import { fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const workURL = data.get('workURL');

    if (!workURL) {
      return fail(400, { workURL, missing: true });
    }

    return { success: true };
  },
};
