import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentComponent,
    ChildComponent,
    FooterComponent,
    ArticleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
