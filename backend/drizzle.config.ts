import type {Config} from 'npm:drizzle-kit';

export default {
	schema: './src/db/**/schema.ts',
	out: './drizzle',
	dialect: 'postgresql',
	dbCredentials: {
		url: Deno.env.get('DATABASE_URL')!,
	},
} satisfies Config;
