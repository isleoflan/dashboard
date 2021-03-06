import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my'
  },
  {
    path: 'my',
    loadChildren: () => import('./onboarding/onboarding.module').then((m) => m.OnboardingModule)
  },
  {
    path: 'seatplan',
    loadChildren: () => import('./seatplan/seatplan.module').then((m) => m.SeatplanModule)
  },
  {
    path: 'ticket',
    loadChildren: () => import('./ticket/ticket.module').then((m) => m.TicketModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
