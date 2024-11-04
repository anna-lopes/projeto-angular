import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Rota para a página inicial
  { path: 'about', component: AboutComponent },  // Rota para a página "About"
  { path: 'contact', component: ContactComponent }  // Rota para a página "Contact"
];
