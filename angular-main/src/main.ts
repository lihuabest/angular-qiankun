import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { registerMicroApps, start } from 'qiankun';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

registerMicroApps(
  [
    {
      name: 'angular-child1',
      entry: '//localhost:10001',
      container: '#container',
      activeRule: 'app-angular-child1',
    },
    {
      name: 'angular-child2',
      entry: '//localhost:10002',
      container: '#container',
      activeRule: 'app-angular-child2',
    },
  ],
  {
    beforeLoad: [
      (app) => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
        return Promise.resolve();
      },
    ],
    beforeMount: [
      (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
        return Promise.resolve();
      },
    ],
    afterUnmount: [
      (app) => {
        console.log(
          '[LifeCycle] after unmount %c%s',
          'color: green;',
          app.name
        );
        return Promise.resolve();
      },
    ],
  }
);
// 启动 qiankun
start();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
