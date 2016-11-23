import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();


router.get('/', (ctx, next) => {
  ctx.body = {
    message: 'Hello World!',
    travis: 'done'
  };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Service started on *:${PORT}`));