import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../core/modules';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'srco-menu',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  isMobile: boolean = true;
  Breakpoints = Breakpoints;

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(Breakpoints.XSmall)
      .subscribe((response) => {
        this.isMobile = response.matches;
      });
  }
}
