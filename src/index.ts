/* ---------- External ---------- */
import 'module-alias/register';

/* ---------- Constants ---------- */
const isDev = process.env.NODE_ENV === 'development';

/* ---------- Utils ---------- */
import { Input } from '_utils/prompt/input.prompt';
import { logger } from '_utils/logs';

const main = async () => {
  const { name } = await Input({
    name: 'name',
    message: 'Enter your name.',
    placeholder: 'John Doe',
  });

  logger.info(name);
};

main().then(() => {
  /* ----------
   * If running in development mode, keep the execution alive
   * for hot reloading.
   * ---------- */
  if (isDev)
    setInterval(() => {
      logger.info('Keeping execution alive...');
    }, 10000);
});
