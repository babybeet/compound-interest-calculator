import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'environments/environment';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';

import { SERVER_API_PREFIX } from '@client:common/injection-tokens';
import { StateStoreService } from '@client:common/state-store';

import { AccountModule } from './account';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerModule } from './banner';
import { FooterModule } from './footer';
import { AddAccessTokenInterceptor } from './interceptors/add-access-token.interceptor';
import { ProgressIndicatorInterceptor } from './interceptors/progress-indicator.interceptor';
import { NavigationModule } from './navigation';
import { HomeModule } from './sections/home';
import { SessionLivenessCheckerInterceptor } from './interceptors/session-liveness-checker.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BannerModule,
    NavigationModule,
    HomeModule,
    FooterModule,
    AccountModule,
    OverlayModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: (): MarkedOptions => {
          const renderer = new MarkedRenderer();

          const linkRenderer = renderer.link;
          renderer.link = (href, title, text) => {
            const html = linkRenderer.call(renderer, href, title, text);

            return html.replace(/^<a /, '<a target="_blank" ');
          };

          const paragraphRenderer = renderer.paragraph;
          renderer.paragraph = (text: string) => {
            return paragraphRenderer.call(renderer, text.trim()).replace(/\n+/g, '');
          };

          const listRenderer = renderer.list;
          renderer.list = (text: string) => {
            return listRenderer.call(renderer, text.trim()).replace(/\n+/g, '');
          };

          const listItemRenderer = renderer.listitem;
          renderer.listitem = (text: string) => {
            return listItemRenderer.call(renderer, text.trim()).replace(/\n+/g, '').replace(/\s{2,}/g, ' ');
          };

          return {
            renderer,
            gfm: true,
            breaks: false,
            pedantic: false,
            smartLists: true,
            smartypants: true,
            mangle: true
          };
        }
      }
    })
  ],
  providers: [
    {
      provide: SERVER_API_PREFIX,
      useValue: environment.apiPrefix
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SessionLivenessCheckerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddAccessTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressIndicatorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(stateStore: StateStoreService) {
    stateStore.initialize({
      authenticatedAccount: null,
      accountRequestCount: 0,
      jwtToken: ''
    });
  }

}
