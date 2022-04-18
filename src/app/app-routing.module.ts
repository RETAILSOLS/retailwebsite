import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
      { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
      { path: 'blockchain', loadChildren: () => import('./pages/blockchain/blockchain.module').then(m => m.BlockchainModule) },
      { path: 'products-solutions', loadChildren: () => import('./pages/products-solutions/products-solutions.module').then(m => m.ProductsSolutionsModule) },
      { path: 'our-expertise', loadChildren: () => import('./pages/our-expertise/our-expertise.module').then(m => m.OurExpertiseModule) },
      { path: 'partners', loadChildren: () => import('./pages/partners/partners.module').then(m => m.PartnersModule) },
      { path: 'certificates-blockcats', loadChildren: () => import('./pages/certificates-blockcats/certificates-blockcats.module').then(m => m.CertificatesBlockcatsModule) },
      { path: 'blockchain-service', loadChildren: () => import('./pages/blockchain-service/blockchain-service.module').then(m => m.BlockchainServiceModule) },
      { path: 'custom-solutions', loadChildren: () => import('./pages/custom-solutions/custom-solutions.module').then(m => m.CustomSolutionsModule) },
      { path: 'carriers', loadChildren: () => import('./pages/carriers/carriers.module').then(m => m.CarriersModule) },
      { path: 'whitelable', loadChildren: () => import('./pages/whitelable/whitelable.module').then(m => m.WhitelableModule) },

    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
