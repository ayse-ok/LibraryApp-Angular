import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { locale as trLang } from './main/i18n/vocabs/tr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-app';

  constructor(private config: PrimeNGConfig, private translateService: TranslateService) { 		
	}

	ngOnInit() {
		this.translateService.setDefaultLang(trLang.lang);
	 }

	translate(lang: string) {
        this.translateService.use(lang);
        this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
    }
}
