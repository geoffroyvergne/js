import {Component, OnDestroy, OnInit, Renderer} from '@angular/core';
import {Search, SearchService} from './search.service';

declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit, OnDestroy {

  public searchContainer: Array<Search> = [];
  public loading = false;
  public page = 0;
  public isLast = false;
  public scrollBottom = $(document).height() + $(window).height();
  public globalListener: Function;

  constructor(private searchService: SearchService, private renderer: Renderer) {
    this.globalListener = this.renderer.listenGlobal('window', 'scroll', (event) => {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        if (! this.loading && ! this.isLast) {
          this.page ++;
          this.getSearch(this.page);
        }
      }
    });
  }

  public getSearch(id: number): void {
    this.loading = true;
    const url = this.searchService.httpService.getBaseUrl() + '/search/' + id;
    this.searchService.getSearch(url).then(searchs => {
      if (searchs.length === 0) {
        this.isLast = true;
      } else {
        this.searchContainer = this.searchContainer.concat(searchs);
        this.scrollBottom = $(document).height() + $(window).height();
      }

      this.loading = false;
    }).catch(error => {
      this.loading = false;
    });
  }

  ngOnInit() {
    this.getSearch(this.page);
  }

  ngOnDestroy() {
    this.globalListener();
  }
}
