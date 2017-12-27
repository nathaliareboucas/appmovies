import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { FeedPage } from '../feed/feed';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = FeedPage;
  tab2Root = ContactPage;
  tab3Root = ConfiguracoesPage;
  
  constructor() {

  }
}
