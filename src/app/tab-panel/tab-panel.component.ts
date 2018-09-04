import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;


  ngAfterContentInit(): void {
    const selectedTab = this.tabs.find(tab => tab.isSelected);

    if (!selectedTab) {
      this.tabs.first.isSelected = true;
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(t => t.isSelected = false);
    tab.isSelected = true;
  }
}
