import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  search : String ="";
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  public onsubmit(){
    if(this.search) {
      this.router.navigate(['/search',{q: this.search,cat:null}]);
    }
    
  }
}
