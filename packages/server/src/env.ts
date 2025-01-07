import {z} from 'zod';

const EnvSchema = z.object({
	DENO_ENV: z.string().default('development'),
	LOG_LEVEL: z.enum([
		'fatal',
		'error',
		'warn',
		'info',
		'debug',
		'trace',
		'silent',
	]),
	DATABASE_URL: z.string().url(),
});

export type env = z.infer<typeof EnvSchema>;

const {data: env, error} = EnvSchema.safeParse(Deno.env.toObject());

if (error) {
	console.error('❌ Invalid env:');
	console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));
	Deno.exit(1);
}

export default env!;
