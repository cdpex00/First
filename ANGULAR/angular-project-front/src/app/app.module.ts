import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ChronologyPageComponent } from './pages/chronology-page/chronology-page.component';
import { GalleryCharactersComponent } from './shared/components/gallery-characters/gallery-characters.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HousesPageComponent,
    CharactersPageComponent,
    ChronologyPageComponent,
    GalleryCharactersComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
